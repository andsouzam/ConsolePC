import sys
import os

# Load settings
home = os.path.expanduser("~")
os.environ.setdefault("DECKY_PLUGIN_DIR", os.path.join(home, "homebrew", "plugins", "Junk-Store"))
os.environ.setdefault("DECKY_PLUGIN_RUNTIME_DIR", os.path.join(home, "homebrew", "data", "Junk-Store"))
os.environ.setdefault("DECKY_PLUGIN_LOG_DIR", os.path.join(home, "homebrew", "logs", "Junk-Store"))
os.environ.setdefault("Extensions", "Extensions")

decky_plugin_dir = os.environ["DECKY_PLUGIN_DIR"]
decky_plugin_runtime_dir = os.environ["DECKY_PLUGIN_RUNTIME_DIR"]
extensions_dir = os.environ["Extensions"]

os.makedirs(os.path.join(decky_plugin_runtime_dir, "scripts", "Extensions"), exist_ok=True)

# Load shared.py
shared_script = os.path.join(decky_plugin_dir, "scripts", "shared.py")
if os.path.exists(shared_script):
    exec(open(shared_script).read(), globals())

platforms = []

platform_arg = sys.argv[1] if len(sys.argv) > 1 else ""
args = sys.argv[2:]

actions = [
    "init", "getgames", "getactions", "saveconfig", "getconfig", "download", 
    "install", "update", "verify", "repair", "import", "getjsonimages", "cancelinstall", 
    "uninstall", "protontricks", "enable-eos-overlay", "disable-eos-overlay", 
    "getgamedetails", "getbats", "savebats", "getprogress", "login", 
    "login_launch_options", "logout", "loginstatus", "getsetting", "savesetting", 
    "getlaunchoptions", "run_exe", "get_exe_list", "gettabconfig", "savetabconfig", 
    "saveplatformconfig", "getplatformconfig", "refresh", "getgamesize", "move", "repair_and_update"
]

def source_scripts(dir_path):
    if os.path.isdir(dir_path):
        store_script = os.path.join(dir_path, "store.py")
        if os.path.isfile(store_script):
            exec(open(store_script).read(), globals())
        if platform_arg:
            store_platform_script = os.path.join(dir_path, platform_arg, "store.py")
            if os.path.isfile(store_platform_script):
                exec(open(store_platform_script).read(), globals())

directories = [
    os.path.join(decky_plugin_dir, "scripts", extensions_dir),
    os.path.join(decky_plugin_runtime_dir, "scripts", extensions_dir)
]

for d in directories:
    source_scripts(d)

if platform_arg in platforms:
    action = args[0] if len(args) > 0 else ""
    func_args = args[1:]
else:
    action = platform_arg
    platform_arg = ""
    func_args = args

action_normalized = action.replace("-", "_")

if action_normalized in actions:
    func_name = f"{platform_arg}_{action_normalized}" if platform_arg else action_normalized
    if func_name in globals() and callable(globals()[func_name]):
        globals()[func_name](*func_args)
    elif action_normalized in globals() and callable(globals()[action_normalized]):
        globals()[action_normalized](*func_args)
    else:
        print(f"Invalid action or function not found: {action}")
        sys.exit(1)
else:
    print(f"Invalid action: {action}")
    sys.exit(1)
