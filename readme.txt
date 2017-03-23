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

git add .
git commit -m 'Init commit'

git remote add origin https://github.com/zarnbou/node-course-2-todo-api.git
git push -u origin master