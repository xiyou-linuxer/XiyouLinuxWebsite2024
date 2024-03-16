#!/bin/bash
screen_name="official-website"
screen -R $screen_name -X quit
npm run docs:build
screen -S $screen_name
screen -R $screen_name -X exec "npm run docs:preview"
