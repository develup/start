# Start page

Creates a start page where you can quickly access up to 6 websites, and switch between them.
You can also add links that open in a new window.

This project is built using [AngularJS](http://angularjs.org/) and [Twitter Bootstrap](http://twitter.github.com/bootstrap/).

Live demo: [http://vps1.sparklingclouds.nl/s/index.html](http://vps1.sparklingclouds.nl/s/index.html)

## Usage

1. Upload the contents to where you want them on your machine, or upload to a web server.
2. Access the file /app/index.html, make sure you're always using http://, because file:// will not work.
3. Add your own links


## Adding links
### Pages

Preload your start pages (max. 6 for now).  
See: `app/data/pages.json`

### Links

Show links to common projects.  
See: `app/data/links.json`  


## Requirements

Works on all modern browsers & Internet Explorer 8+.

## Todo
* Make back button function correctly.
* Add ability to 'reset' a frame to its starting page.
* Make search useful