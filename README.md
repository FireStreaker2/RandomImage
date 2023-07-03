![RandomImage](https://socialify.git.ci/FireStreaker2/RandomImage/image?description=1&font=Raleway&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Dark)

# About
RandomImage is a way to randomly "generate" images, to serve a different image every time you visit a webpage. It was originally meant for GitHub profile READMEs, but it can be used in other ways too.

# Usage
RandomImage comes with two different options, internal and external. Internal relies on <a href="https://github.com/FireStreaker2/RandomImage#Selfhosting">selfhosting</a> the project, where you insert your own images into the ``images`` directory. This makes it so that your iamges will be served when you visit the base url (also known as the index). The other option is externally, where you can use the ``/external/`` route, as found in ``index.js``. It's used by appending a list of URLs to images, where then in the backend it randomly selects one and then serves that image in the frontend. Examples are below

# Example
The following pictures **should** be different every time you refresh this page (assuming you're viewing this from a web browser and it renders properly). You can also visit the links directly in your browser!

Internal:  
<img src="https://random-image.firestreaker2.gq" />  
> ``<img src="https://random-image.firestreaker2.gq" />``  

External:  
<img src="https://random-image.firestreaker2.gq/external/https://i.pinimg.com/originals/7f/fd/45/7ffd45f6396c0628d7b5f06b8eeefa9e.jpg,https://i.pinimg.com/originals/a0/d0/4f/a0d04f7418a0b3739f36b3b3625033f8.png,https://i.pinimg.com/originals/5d/e1/28/5de1289bc31108e602e12cda485eabb6.jpg" />
> ``<img src="https://random-image.firestreaker2.gq/external/https://i.pinimg.com/originals/7f/fd/45/7ffd45f6396c0628d7b5f06b8eeefa9e.jpg,https://i.pinimg.com/originals/a0/d0/4f/a0d04f7418a0b3739f36b3b3625033f8.png,https://i.pinimg.com/originals/5d/e1/28/5de1289bc31108e602e12cda485eabb6.jpg" />``  

> Please note that if you are using the external route, every option/url MUST end with a valid image extension (ex. .png, .jpeg)

# Selfhosting
If you would like to selfhost this project, you may.
```bash
$ git clone https://github.com/FireStreaker2/RandomImage.git
$ cd RandomImage
$ npm i
$ npm start
```

# License
<a href="https://github.com/FireStreaker2/RandomImage/blob/main/LICENSE">MIT</a>