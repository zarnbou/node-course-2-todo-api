cd "C:\Program Files\MongoDB\Server\3.4\bin>"
mongod.exe --dbpath "C:\Users\Zarn Bou\mongo-data"

C:\NodeJS\node-todo-api>git init
Initialized empty Git repository in C:/NodeJS/node-todo-api/.git/

C:\NodeJS\node-todo-api>git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        node_modules/
        package.json
        playground/
        readme.txt

nothing added to commit but untracked files present (use "git add" to track)

create gitignore in the root of the project
type in the name of the folder/file you want to ignore e.g. node_modules/

git status
git add .
git status
git commit -m "initial commit"
git remote add origin https://github.com/zarnbou/node-course-2-todo-api.git
git push -u origin master

%userprofile%\.gitconfig
[http]
    proxy = http://zarn.bou:l3l34me123@proxy.det.nsw.edu.au:8080

npm i express@4.15.2 body-parser@1.17.2 --save

npm run test-watch

SET HTTP_PROXY=http://zarn.bou:l3l34me123@proxy.det.nsw.edu.au:8080
SET HTTPS_PROXY=http://zarn.bou:l3l34me123@proxy.det.nsw.edu.au:8080

heroku addons:create mongolab:sandbox

heroku config
MONGODB_URI: mongodb://heroku_6tjxq7j1:vmne92clua5k5be18nr4kbe4dj@ds139438.mlab.com:39438/heroku_6tjxq7j1