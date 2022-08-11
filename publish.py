#!/usr/bin/env python3

import os, shutil, sys

from httk.httkweb import publish

if not os.path.exists("output"):
    os.mkdir("output")

for filename in os.listdir("output"):
    if not filename.startswith("."):
        f = os.path.join("output",filename)
        if os.path.isdir(f):
            shutil.rmtree(f)
        else:
            os.unlink(f)

publish("src","output",'http://127.0.0.1/')
