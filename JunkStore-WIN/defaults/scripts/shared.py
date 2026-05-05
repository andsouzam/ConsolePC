import os
import sys
import subprocess
import json
import psutil

DOSCONF = os.environ.get("DOSCONF", f"{sys.executable} ./scripts/dosconf.py")
EPICCONF = os.environ.get("EPICCONF", f"{sys.executable} ./scripts/epic-config.py")
LEGENDARY = os.environ.get("LEGENDARY", os.path.join(os.environ.get("DECKY_PLUGIN_RUNTIME_DIR", "."), "bin", "legendary.exe"))
DBFILE = os.environ.get("DBFILE", "games.db")
DECKY_PLUGIN_LOG_DIR = os.environ.get("DECKY_PLUGIN_LOG_DIR", "")
INSTALL_DIR = os.environ.get("INSTALL_DIR", "")
OFFLINE_MODE = os.environ.get("OFFLINE_MODE", "")

def execute_cmd(cmd, get_output=True, background=False, stdin_data=None, log_file=None, err_file=None):
    if background:
        out_target = open(log_file, "a") if log_file else subprocess.DEVNULL
        err_target = open(err_file, "a") if err_file else subprocess.DEVNULL
        proc = subprocess.Popen(cmd, shell=True, stdout=out_target, stderr=err_target)
        return proc.pid
    else:
        if stdin_data:
            result = subprocess.run(cmd, shell=True, input=stdin_data.encode(), capture_output=True)
        else:
            result = subprocess.run(cmd, shell=True, capture_output=True)
        if get_output:
            return result.stdout.decode().strip()
        return result.returncode

def init(*args):
    for plat in platforms:
        init_func = f"{plat}_init"
        if init_func in globals() and callable(globals()[init_func]):
            execute_cmd(f"{sys.executable} {sys.argv[0]} {plat} init", background=True)
    print(json.dumps({"Type": "Success", "Content": {"Message": "Initialized"}}))

def getgames(*args):
    filter_arg = args[0] if len(args) > 0 else ""
    installed = args[1] if len(args) > 1 else "false"
    limit = args[2] if len(args) > 2 else "true"
    image_path = ""
    cmd = f"{DOSCONF} --getgameswithimages '{image_path}' '{filter_arg}' '{installed}' '{limit}' 'true' --dbfile {DBFILE}"
    print(execute_cmd(cmd))

def saveconfig(*args):
    input_data = sys.stdin.read()
    cmd = f"{DOSCONF} --parsejson '{args[0]}' --dbfile {DBFILE} --platform Windows --fork Proton --version null"
    print(execute_cmd(cmd, stdin_data=input_data))

def getconfig(*args):
    cmd = f"{DOSCONF} --confjson '{args[0]}' --platform Windows --fork Proton --version null --dbfile {DBFILE}"
    print(execute_cmd(cmd))

def cancelinstall(*args):
    game_id = args[0]
    pid_file = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.pid")
    if os.path.exists(pid_file):
        with open(pid_file, "r") as f:
            pid = int(f.read().strip())
        try:
            psutil.Process(pid).terminate()
        except:
            pass
        os.remove(pid_file)
    
    # attempt to kill legendary.exe
    execute_cmd("taskkill /F /IM legendary.exe", get_output=False)
    
    tmp_pid = os.path.join(DECKY_PLUGIN_LOG_DIR, "tmp.pid")
    if os.path.exists(tmp_pid):
        os.remove(tmp_pid)
    
    print(json.dumps({"Type": "Success", "Content": {"Message": "Cancelled"}}))

def download(*args):
    game_id = args[0]
    progress_log = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.progress")
    log_file = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.log")
    
    cmd = f"{LEGENDARY} install {game_id} --with-dlcs -y --platform Windows --base-path \"{INSTALL_DIR}\""
    pid = execute_cmd(cmd, background=True, log_file=log_file, err_file=progress_log)
    
    with open(os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.pid"), "w") as f:
        f.write(str(pid))
    print(json.dumps({"Type": "Progress", "Content": {"Message": "Downloading"}}))

def update(*args):
    game_id = args[0]
    progress_log = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.progress")
    log_file = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.log")
    
    cmd = f"{LEGENDARY} update {game_id} --update -y"
    pid = execute_cmd(cmd, background=True, log_file=log_file, err_file=progress_log)
    
    with open(os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.pid"), "w") as f:
        f.write(str(pid))
    print(json.dumps({"Type": "Progress", "Content": {"Message": "Updating"}}))

def verify(*args):
    game_id = args[0]
    progress_log = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.progress")
    log_file = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.log")
    
    cmd = f"{LEGENDARY} verify {game_id}"
    pid = execute_cmd(cmd, background=True, log_file=log_file, err_file=progress_log)
    
    with open(os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.pid"), "w") as f:
        f.write(str(pid))
    print(json.dumps({"Type": "Progress", "Content": {"Message": "Updating"}}))

def repair(*args):
    game_id = args[0]
    progress_log = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.progress")
    log_file = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.log")
    
    cmd = f"{LEGENDARY} repair {game_id} --repair-and-update -y"
    pid = execute_cmd(cmd, background=True, log_file=log_file, err_file=progress_log)
    
    with open(os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.pid"), "w") as f:
        f.write(str(pid))
    print(json.dumps({"Type": "Progress", "Content": {"Message": "Updating"}}))

def protontricks(*args):
    # Not applicable natively in Windows, but we keep the stub
    pass

def import_game(*args):
    game_id = args[0]
    progress_log = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.progress")
    log_file = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.log")
    
    game_dir = execute_cmd(f"{EPICCONF} --get-game-dir {game_id} --dbfile {DBFILE} {OFFLINE_MODE}")
    if os.path.isdir(game_dir):
        cmd = f"{LEGENDARY} import {game_id} \"{game_dir}\" {OFFLINE_MODE}"
        pid = execute_cmd(cmd, background=True, log_file=log_file, err_file=progress_log)
        with open(os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.pid"), "w") as f:
            f.write(str(pid))
    print(json.dumps({"Type": "Progress", "Content": {"Message": "Updating"}}))

def move(*args):
    game_id = args[0]
    progress_log = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.progress")
    log_file = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.log")
    
    game_dir = execute_cmd(f"{EPICCONF} --get-game-dir {game_id} --dbfile {DBFILE} {OFFLINE_MODE}")
    skip_move = "--skip-move" if os.path.isdir(game_dir) else ""
    
    cmd = f"{LEGENDARY} move {game_id} \"{game_dir}\" {skip_move} {OFFLINE_MODE}"
    pid = execute_cmd(cmd, background=True, log_file=log_file, err_file=progress_log)
    with open(os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.pid"), "w") as f:
        f.write(str(pid))
    print(json.dumps({"Type": "Progress", "Content": {"Message": "Updating"}}))

def install(*args):
    # In Windows, directly run the game
    game_id = args[0]
    progress_log = os.path.join(DECKY_PLUGIN_LOG_DIR, f"{game_id}.progress")
    if os.path.exists(progress_log):
        os.remove(progress_log)
    
    execute_cmd(f"{DOSCONF} --addsteamclientid \"{game_id}\" \"{args[1]}\" --dbfile {DBFILE}")
    args_str = execute_cmd(f"{sys.executable} ./scripts/args_script.py \"{game_id}\"") # placeholder for ARGS_SCRIPT
    temp = execute_cmd(f"{EPICCONF} --launchoptions \"{game_id}\" \"{args_str}\" \"\" --dbfile {DBFILE} {OFFLINE_MODE}")
    print(temp)
    sys.exit(0)

def getlaunchoptions(*args):
    game_id = args[0]
    args_str = execute_cmd(f"{sys.executable} ./scripts/args_script.py \"{game_id}\"")
    temp = execute_cmd(f"{EPICCONF} --launchoptions \"{game_id}\" \"{args_str}\" \"\" --dbfile {DBFILE} {OFFLINE_MODE}")
    print(temp)
    sys.exit(0)

def uninstall(*args):
    game_id = args[0]
    execute_cmd(f"{LEGENDARY} uninstall {game_id} -y {OFFLINE_MODE} >> \"{os.path.join(DECKY_PLUGIN_LOG_DIR, game_id + '.log')}\"")
    temp = execute_cmd(f"{DOSCONF} --clearsteamclientid \"{game_id}\" --dbfile {DBFILE}")
    print(temp)

def getgamedetails(*args):
    temp = execute_cmd(f"{DOSCONF} --getgamedata \"{args[0]}\" \"\" --dbfile {DBFILE}")
    print(temp)
    sys.exit(0)

def getbats(*args):
    temp = execute_cmd(f"{DOSCONF} --getjsonbats \"{args[0]}\" --dbfile {DBFILE}")
    print(temp)

def savebats(*args):
    input_data = sys.stdin.read()
    print(execute_cmd(f"{DOSCONF} --updatebats \"{args[0]}\" --dbfile {DBFILE}", stdin_data=input_data))

def getprogress(*args):
    temp = execute_cmd(f"{EPICCONF} --getprogress \"{os.path.join(DECKY_PLUGIN_LOG_DIR, args[0] + '.progress')}\" --dbfile {DBFILE}")
    print(temp)

def loginstatus(*args):
    temp = execute_cmd(f"{EPICCONF} --getloginstatus --dbfile {DBFILE} {OFFLINE_MODE}")
    print(temp)

def enable_eos_overlay(*args):
    print(json.dumps({"Type": "Overlay", "Content": {"Message": "Enabled (Stub in Windows)"}}))

def disable_eos_overlay(*args):
    print(json.dumps({"Type": "Overlay", "Content": {"Message": "Disabled (Stub in Windows)"}}))

def run_exe(*args):
    steam_id, game_shortname, game_exe, options, compat_tool = args[:5]
    game_path = execute_cmd(f"{EPICCONF} --get-game-dir {game_shortname} --dbfile {DBFILE} --offline")
    
    print(launchoptions(f"{game_path}\\{game_exe}", options, game_path, "Windows Game Executable", True, compat_tool))

def get_exe_list(*args):
    steam_id, game_shortname = args[:2]
    game_path = execute_cmd(f"{EPICCONF} --get-game-dir {game_shortname} --dbfile {DBFILE} --offline")
    
    files_list = []
    if os.path.exists(game_path):
        for root, dirs, files in os.walk(game_path):
            for file in files:
                if file.lower().endswith(".exe"):
                    rel_dir = os.path.relpath(root, game_path)
                    p = file if rel_dir == "." else os.path.join(rel_dir, file)
                    files_list.append({"Path": p})
                    
    print(json.dumps({"Type": "FileContent", "Content": {"Files": files_list}}))

def launchoptions(exe, options, working_dir, name, compatibility=False, compat_tool_name=""):
    return json.dumps({"Type": "RunExe", "Content": {
        "Exe": exe,
        "Options": options,
        "WorkingDir": working_dir,
        "Name": name,
        "Compatibility": compatibility,
        "CompatToolName": compat_tool_name
    }})

def login(*args):
    # Fixed to use native legendary.exe instead of flatpak
    print(launchoptions(LEGENDARY, "auth", "", "Epic Games Login", False, ""))

def login_launch_options(*args):
    temp = execute_cmd(f"{DOSCONF} --launchoptions \"{LEGENDARY}\" \"auth\" \"\" \"Epic Games Login\" --dbfile {DBFILE}")
    print(temp)

def logout(*args):
    execute_cmd(f"{LEGENDARY} auth --delete")
    loginstatus()

def getsetting(*args):
    print(execute_cmd(f"{DOSCONF} --getsetting \"{args[0]}\" --dbfile {DBFILE}"))

def savesetting(*args):
    execute_cmd(f"{DOSCONF} --savesetting \"{args[0]}\" \"{args[1]}\" --dbfile {DBFILE}")

def getjsonimages(*args):
    print(execute_cmd(f"{EPICCONF} --get-base64-images \"{args[0]}\" --dbfile {DBFILE} --offline"))

def gettabconfig(*args):
    schemas_dir = os.path.join(decky_plugin_runtime_dir, "conf_schemas")
    os.makedirs(schemas_dir, exist_ok=True)
    
    runtime_schema = os.path.join(schemas_dir, "epictabconfig.json")
    plugin_schema = os.path.join(os.environ.get("DECKY_PLUGIN_DIR", ""), "conf_schemas", "epictabconfig.json")
    
    content = "{}"
    if os.path.exists(runtime_schema):
        with open(runtime_schema, "r") as f:
            content = f.read()
    elif os.path.exists(plugin_schema):
        with open(plugin_schema, "r") as f:
            content = f.read()
            
    print(f"{{\"Type\":\"IniContent\", \"Content\": {content}}}")

def savetabconfig(*args):
    schemas_dir = os.path.join(decky_plugin_runtime_dir, "conf_schemas")
    os.makedirs(schemas_dir, exist_ok=True)
    with open(os.path.join(schemas_dir, "epictabconfig.json"), "w") as f:
        f.write(sys.stdin.read())
    print(json.dumps({"Type": "Success", "Content": {"success": "True"}}))

def getgamesize(*args):
    print(json.dumps({"Type": "GameSize", "Content": {"DiskSize": ""}}))
