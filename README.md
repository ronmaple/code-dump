### freeCodeCamp backend challenges
My personal collection of solutions to the backend challenges - and for git/github practice.

Done in AWS C9 environment.

##### cmd line based tutorials:
- learnyounode
- expressworks
- learnyoumongo*

learnyoumongo installation instructions of mongodb on AWS C9 is outdated.

I used:

```
$ touch mongodb-org-3.6.repo
$ sudo mv mongodb-org-3.6.repo /etc/yum.repos.d
$ sudo yum install mongodb-org
$ cd
$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal' > mongod
$ chmod a+x mongod
```
Run with script:
```
$ ./mongod
```
