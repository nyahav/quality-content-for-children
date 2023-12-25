@echo off

call scripts\clean.bat

cd frontend
yarn build

echo Build complete!