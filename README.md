for PXT/microbit

# Sample PXT-microbit CPP Package Template

This is the template PXT-microbit CPP Package used by Tinkertanker.

## Environment Setup

1. Install [yotta](https://lancaster-university.github.io/microbit-docs/offline-toolchains/#yotta) if you haven't already
2. Install node in a method appropriate for your platform. On MacOS I prefer these steps
```
# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

# install the latest node
nvm install node
```
3. Create a folder for package development and install PXT
```
# create a folder of your choosing
mkdir pxt-package-dev
cd pxt-package-dev

# install PXT command-line tools
node install pxt

# create projects folder
mkdir projects
cd projects

# clone this repository into your projects folder
git clone ???
```

##  Building Package from Command Line
1. From the package folder, run `pxt install` to pull in required PXT dependencies
2. Run `pxt build` to compile

## Including your test package in PXT
1. Launch the PXT server from your `pxt-package-dev` folder using `pxt server -yt`
2. In your PXT project in the web browser, open project properties (More -> Project Properties)
3. Click on Edit Settings As Text
4. Add an entry under dependencies that points to your package folder (this is relative to your PXT project, which is likely in projects/untitled)
```
{
    "name": "banana test",
    "dependencies": {
        ...
        "banana": "file:../pxt-cpptemplate"
    },
    ...
}
```
5. Click back to Block View to have the sample package installed, and the sample components should appear.

## Modify the Template
1. If all is working, you don't want your sample package to be linked back to our github repository anymore. In the package folder, delete the `.git` folder
2. `pxt clean` first to remove generated files like all the `.d.ts` files
3. Open `pxt.json` and edit the package info accordingly (name, version, description).
4. You'll want to rename the implementation files `cpptemplate.cpp` and `cpptemplate.ts` to match your project, but remember to rename the corresponding entries in `pxt.json`
5. Any header files you want to include should also go in the `pxt.json` file
6. If 

## TODO
1. How to solve the `pxtsim` warning in the web editor when you try and run code that uses your package?
2. How to draw the parts in the simulator like you see when you use the neopixel package?

