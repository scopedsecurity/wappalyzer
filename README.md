# Wappalyzer

[Wappalyzer](https://wappalyzer.com/) is a 
[cross-platform](https://github.com/ElbertF/Wappalyzer/wiki/Drivers) utility that uncovers the 
technologies used on websites. It detects
[content management systems](https://wappalyzer.com/categories/cms),
[eCommerce platforms](https://wappalyzer.com/categories/ecommerce),
[web servers](https://wappalyzer.com/categories/web-servers), 
[JavaScript frameworks](https://wappalyzer.com/categories/javascript-frameworks),
[analytics tools](https://wappalyzer.com/categories/analytics) and
[many more](https://wappalyzer.com/applications).

Refer to the [wiki](https://github.com/ElbertF/Wappalyzer/wiki) for
[screenshots](https://github.com/ElbertF/Wappalyzer/wiki/Screenshots), information on how to 
[contribute](https://github.com/ElbertF/Wappalyzer/wiki/Contributing) and
[more](https://github.com/ElbertF/Wappalyzer/wiki/_pages).

*Licensed under the [GPL](https://github.com/ElbertF/Wappalyzer/blob/master/LICENSE).*


## Getting Started

This section describes how to set up a development environment. Everything you
need is contained in a Docker image which is managed by Vagrant.

Running this environment optional but recommended as it provides some helpful tools.

First, install Docker and Vagrant on your system.

* Docker ([docker.com](https://www.docker.com/))
* Vagrant ([vagrantup.com](https://www.vagrantup.com/))

Clone the Wappalyzer repository and open the newly created directory in a 
terminal. Run `vagrant up` to start the environment.


```shell
$ git clone https://github.com/ElbertF/Wappalyzer.git wappalyzer
$ cd wappalyzer
$ vagrant up
```

To stop the environment, run `vagrant halt`.

In order to access the environment, run `vagrant ssh`.
