import os

home = os.path.expanduser("~")
os.environ.setdefault("DECKY_PLUGIN_DIR", os.path.join(home, "homebrew", "plugins", "Junk-Store"))
os.environ.setdefault("DECKY_PLUGIN_RUNTIME_DIR", os.path.join(home, "homebrew", "data", "Junk-Store"))
os.environ.setdefault("DECKY_PLUGIN_LOG_DIR", os.path.join(home, "homebrew", "logs", "Junk-Store"))
os.environ.setdefault("Extensions", "Extensions")
