import os
import sys
import urllib.request

def download_file(url, dest_path):
    print(f"Downloading {url} to {dest_path}...")
    urllib.request.urlretrieve(url, dest_path)
    print("Download complete.")

def install():
    print("Installing Epic dependencies for Windows...")
    
    # We download legendary.exe to DECKY_PLUGIN_RUNTIME_DIR or plugin dir
    runtime_dir = os.environ.get("DECKY_PLUGIN_RUNTIME_DIR", ".")
    bin_dir = os.path.join(runtime_dir, "bin")
    os.makedirs(bin_dir, exist_ok=True)
    
    legendary_path = os.path.join(bin_dir, "legendary.exe")
    legendary_url = "https://github.com/derrod/legendary/releases/latest/download/legendary.exe"
    
    download_file(legendary_url, legendary_path)
    
    print("Epic dependencies installed.")

def uninstall():
    print("Uninstalling Epic dependencies for Windows...")
    runtime_dir = os.environ.get("DECKY_PLUGIN_RUNTIME_DIR", ".")
    legendary_path = os.path.join(runtime_dir, "bin", "legendary.exe")
    
    if os.path.exists(legendary_path):
        os.remove(legendary_path)
        print("legendary.exe removed.")
    else:
        print("legendary.exe not found.")
        
    print("Epic dependencies uninstalled.")

if __name__ == "__main__":
    action = sys.argv[1] if len(sys.argv) > 1 else "install"
    if action == "uninstall":
        uninstall()
    else:
        install()
