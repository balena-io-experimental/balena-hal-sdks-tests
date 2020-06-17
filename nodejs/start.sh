#! /bin/bash

node index.js

while : ; do echo "${MESSAGE=Idling...}"; sleep ${INTERVAL=600}; done
