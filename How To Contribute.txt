Here's how you can set up and contribute to this Project!

## Setting Up Git Bash (Only for First-Timers)

If you're unfamiliar with Git Bash or if this is your first time contributing, follow these steps to get started:

1. Download git bash for your device: [Git Bash](https://git-scm.com/downloads)

1. Open git bash anywhere on your local server by clicking the right mouse button. Then set up your name and email ID:

	`$ git config --global user.name "<Your_Name>"`
	`$ git config --global user.email "<Your_Email>"`

3.

## Contributing to the Project 

Once you have Git Bash up and running, you can start contributing to the project. Follow these steps to make sure that you get off on the right foot: 
 
1. Fork the repository using the "Fork" feature above.

1. Now, clone your Forked repo. This can be done in two ways:

	1. If you have Git Bash installed, then simply copy the link to your Forked repo, open Git Bash in your local system, and type 

	`$ git clone <forked_repo_link>`

	1. If you do not have Git Bash installed, then you can simply download the files in your Forked repo in a compressed format, using the option under the Code dropdown menu.

1. Now, go to the original repo and open the tab marked "Issues". Here you'll find all the open issues that you can contribute to. Open any issue of your choice, and if it hasn't been claimed by any one yet, you can comment something along the lines of "I would like to work on this!" following which you will be assigned the selfsame issue. 

1. Currently you are on the master branch. Working directly on the master branch is never advisable. 
Create a new feature branch to work on. The benefit of creating a feature branch is that if you ever feel the need of rolling back some changes you made, you can always switch over to another branch without risking data loss from the main/master branch. In order to create a new branch, open git bash in your local repo and type:

	`$ git checkout -b <Your_Feature_Branch_Name>`

5. Work! This is where you put your web development skills to use and find the best possible solution to the issue. Use Google, Stack Overflow, MDN Docs, or whatever resource you need, and finish contributing to the Project. Make sure to test the finished version of your files for any errors or bugs, and for future reference, keep a screenshot of the final version.

6. Once you have added the necessary files to your local repo, open Git Bash and type:

	`$ git add .`

This adds all the new files to the staging area, where they are made ready to be committed.

	`$ git commit -m <Optional_Message>`

The <Optional_Message> should be helpful and should describe what you have changed.

7. Here, you can encounter a problem. More often than not, by the time developers finish working on their version of the branch, they will discover that the master branch in the original repo was updated, and so now their Forked repo is severel commits behind. In order to resolve this issue, open Git Bash and type:

	`$ git remote add upstream <Original_Repo_Link>`

This will add a remote to your local repo under the branch name 'upstream'. Then:

	`$ git fetch upstream`

This will fetch all the changes that were made on the master branch after you forked it.

	`$ git checkout master`

Switch over to your master branch.

	`$ git rebase upstream/master`



	`$ git push origin master` 

This will finally push the changes to your Forked repo.

7. Now, send a pull request to the original repo, describing briefly what changes you have made in order to resolve the issue. Your PR will be reviewed, and if the editions are deemed satisfactory, the PR will be merged with the original repo.

Happy Hacktoberfest! 
