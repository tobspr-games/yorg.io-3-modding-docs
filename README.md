# YORG.io 3 Modding Documentation

This documentation is supposed to teach you how to write mods for YORG.io 3.

## Writing Mods

### Getting started


An example mod is located in `sample_mod/mod.js`. It contains a very basic example on
how to setup a mod. I recommend cloning this repository.

To start with your own mod, I recommend copying the `sample_mod` folder somewhere.
You can then start by modifying the `mod.js` to your needs.

While there is very basic API documentation, I **strongly** recommend to join the official discord (http://discord.yorg3.io) and get in contact with me (`tobspr#5407`). I am very happy to help out, and I can also add new features to the mod api if you need them.

There is also a documentation of all classes available which can be helpful: https://docs.yorg3.io


### Testing your own mod

Since I manually publish all mods (See below), you can not directly test your mod. However, I have added some helper script which makes it possible to test local mods:

1. Install python 2.7 (Python 3 will not work, at least not if you don't modify the script)
2. Open a terminal shell in the folder your mod is located in (It needs to be called `mod.js`)
3. Run `python mod_testing_server.py` (The script is located in this repository)
4. Ensure with a browser that you can reach `http://localhost:8000/mod.js`
5. Visit https://beta.yorg3.io/xdev_modDeveloper=1
6. There should now be a dummy mod installed, which will load your javascript file.
7. Make sure to reload the page when doing any changes



## Publishing your mod

Right now I manually publish all mods to ensure they have a certain quality (This might change in the future). Steps to publish your mod:

1. Ensure it works locally for you
2. DM me on discord (`tobspr#5407`) with the following information about your mod:
    - Name
    - Author
    - Description (Should describe what your mod does, but not too long)
    - Website (I recommend creating a github repository)
    - Some link where I can download your mod
    - Version (If you want to push an update)

3. Wait until I tested and approved your mod.
4. I will upload and publish your mod on https://beta.yorg3.io first. You can test it there and ask people to try it out.
5. Once your mod has been tested by at least a few persons (Simply ask in the discord), I will add your mod to the mod gallery.


