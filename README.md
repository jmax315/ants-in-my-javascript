# ants-in-my-javascript

An implementations of
[Langton's Ant](https://en.wikipedia.org/wiki/Langton%27s_ant) written
in Javascript (in the browser).

Check the project
[Wiki](https://github.com/jmax315/ants-in-my-javascript/wiki) for
(slightly) more details.

To run this, simply clone the repo, and load up ant-board.html in your
browser.

Development is a little more complicated; you _should_ be able to just
load up SpecRunner.html to run the tests, but this may not work,
depending on what browser you're using (it definitely doesn't work
under Chrome).

The problem is the test coverage tool I'm using (blanket). It pulls in
the project code (to instrument it) via XHR requests, and Chrome gets
all pissy about allowing XHR requests when the original page was
loaded from a file. Other web browsers may be just fine; this is a
rather grey area.

There are various workarounds for this problem; the one I'm using is
to simply run a small web server.

The script to start that up is in scripts/server. It fires up a copy
of Ruby, loads the Webrick server (packaged with Ruby, so you
shouldn't have to install anything else), and listens on port 8000.

So, after running scripts/server, point your web browser at
http://localhost:8000/SpecRunner.html to run the tests.

**n.b. Do not run this on an Internet-facing machine!**

Webrick, by itself, is not a production-grade web server. If you run
it so it's visible on the public Internet, you are effectively hanging
out a "Hack my machine, please." sign.
