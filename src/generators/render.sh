#!/bin/bash

RENDERJS="${0%.sh}.js"

phantomjs "$RENDERJS" "$@"
