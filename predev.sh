#!/bin/bash

trap 'npm run postdev' SIGINT
npm run services:up && npm run services:wait:database && npm run migrations:up && next dev

exit 0
