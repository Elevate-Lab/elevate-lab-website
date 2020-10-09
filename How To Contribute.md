Here's how you can set up and contribute to this Project! :smile: :smile:

## Setting Up Git Bash (Only for First-Timers)

If you're unfamiliar with Git Bash or if this is your first time contributing, follow these steps to get started:

1. Download Git Bash for your device :computer: :desktop_computer: : [Git Bash](https://git-scm.com/downloads)

1. Open Git Bash anywhere on your local server by clicking the right mouse button :computer_mouse:. Then set up your name and email ID:

	`$ git config --global user.name "<Your_Name>"`
	
	`$ git config --global user.email "<Your_Email>"`

1. Go to [GitHub](http://github.com/) and create your account. Make sure that the email you use is the same one you used in Git Bash.

And that's it! :star_struck: You're good to go. :partying_face: :+1:

## Contributing to the Project 

Once you have Git Bash up and running, you can start contributing to the project. Follow these steps to make sure that you get off on the right foot: 
 
1. Fork :fork_and_knife: the repository using the "Fork" feature above.

1. Now, clone your forked repo. This can be done in two ways:

	1. Open Git Bash in your local system (in the directory of your choice) and type the following command: 

		`$ git clone <forked_repo_link>`

	1. You can also simply download the files in your Forked repo in a compressed format, using the option under the Code dropdown menu.

1. Now, go to the original repo and open the tab marked **"Issues"**. Here you'll find all the open issues that you can contribute to. Open any issue of your choice, and if it hasn't been claimed by any one yet, you can comment something along the lines of "I would like to work on this!" following which you will be assigned the selfsame issue. 

1. Currently you are on the main/master branch :brain:. Working directly on the main/master branch is never advisable. 
Create a new feature branch to work on. The benefit of creating a feature branch is that if you ever feel the need of rolling back :clock12: :clock9: :clock6: :clock3: :clock12: some changes you made, you can always switch over to another branch without risking data loss from the main/master branch. In order to create a new branch, open git bash in your local repo and type:

	`$ git checkout -b <Your_Feature_Branch_Name>`
	
	This will create a new branch named <Your_Feature_Branch_Name>. For more info on the [Checkout](https://www.atlassian.com/git/tutorials/using-branches/git-checkout) command, follow the link! 

1. Work! :man_mechanic: :woman_mechanic: This is where you put your web development :earth_asia: skills to use and find the best possible solution to the issue. Use Google, Stack Overflow, MDN Docs, or whatever resource you need, and finish contributing to the Project. Make sure to test the finished version of your files for any errors or bugs, and for future reference, keep a screenshot of the final version. :rocket: 

1. Once you have added the necessary files to your local repo, open Git Bash and type:

	`$ git add .`

	This adds all the new files to the staging area, where they are made ready to be committed.

	`$ git commit -m <Optional_Message>`

	The <Optional_Message> should be helpful and should describe what you have changed.

1. Here, you can encounter a problem. More often than not, by the time developers finish working on their version of the branch, they will discover that the main/master branch in the original repo was updated, and so now their forked repo is severel commits behind. 

	1. In order to resolve this issue, open Git Bash and type:

		`$ git remote add upstream <Original_Repo_Link>`

	1. This will add a remote to your local repo under the branch name 'upstream'. Then:

		`$ git fetch upstream`

	1. This will fetch all the changes that were made on the main/master branch after you forked it.

		`$ git checkout main`

	1. Switch over to your main/master branch.

		`$ git rebase upstream/main`

	1. Rebasing will basically bring your main/master branch up to date with the main/master branch of the original repo. For more info on [Rebase] (https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase), follow the link. Now since your main/master branch is up to date, let's do the same for your feature branch. 
	
		`$ git checkout main`
		
		`$ git pull origin main`
		
		`$ git checkout <Your_Feature_Branch_Name>`
		
		`$ git rebase main`
	
	This will bring your feature branch up to date with your main/master branch. Now, you are *finally* read to push the changes!
	
1. Type the following command to push the changes onto your remote repo:

	`$ git push origin <Your_Feature_Branch_Name>` 

This will finally push the changes to your forked repo. Summarizing, you now have a branch named <Your_Feature_Branch_Name> which contains the changes that you have made. The next step is to first merge this with your own main/master branch, and then send a pull request to the original repo. 

## Sending a Pull Request :email:

Remember the screenshots you took of the final editions of your work? Well, they're about to come in handy! Here are some basic tips on making a good pull request:

1. Choose a relevant title. Usually, you can mention what change you've made or what Issue Number you've resolved.

1. Include screenshots of your changes in the PR :inbox_tray:, as this will help the Reviewer easily see the work you've done. 

1. Mention any other vital info that you find worth mentioning. 

1. Send the PR to the original repo. Your PR will be reviewed, and if the editions are deemed satisfactory, the PR will be merged with the original repo. However, sometimes Reviewers might leave a review on your PR, describing any further changes you may need to make, so make sure you do. 

### Happy Hacktoberfest! :ghost: :ghost: :skull: :skull:
