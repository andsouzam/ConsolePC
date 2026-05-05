import os
import sys
import subprocess

def install():
    print("===================================")
    print("  Dependency installation starting")
    print("  Do not navigate away please...")
    print("===================================")

    paths = [
        os.path.join(".", "scripts", "Extensions"),
        os.path.join(os.path.expanduser("~"), "homebrew", "data", "Junk-Store", "scripts", "Extensions")
    ]

    for path in paths:
        if os.path.exists(path):
            for root, dirs, files in os.walk(path):
                if "install_deps.py" in files:
                    script = os.path.join(root, "install_deps.py")
                    subprocess.run([sys.executable, script])

    print("===================================")
    print("  Dependency installation complete")
    print("===================================")

def uninstall():
    print("===================================")
    print("  Dependency uninstallation starting")
    print("  Do not navigate away please...")
    print("===================================")

    paths = [
        os.path.join(".", "scripts", "Extensions"),
        os.path.join(os.path.expanduser("~"), "homebrew", "data", "Junk-Store", "scripts", "Extensions")
    ]

    for path in paths:
        if os.path.exists(path):
            for root, dirs, files in os.walk(path):
                if "install_deps.py" in files:
                    script = os.path.join(root, "install_deps.py")
                    subprocess.run([sys.executable, script, "uninstall"])

    print("===================================")
    print("  Dependency uninstallation complete")
    print("===================================")

if __name__ == "__main__":
    action = sys.argv[1] if len(sys.argv) > 1 else "install"
    if action == "uninstall":
        uninstall()
    else:
        install()
