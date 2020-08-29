---
title: Creating and Merging Pull Requests in GitHub
author: Jason Gaylord
date: 2020-07-07
categories: [dev,devops,github]
tags:  [dev,devops,github]
post-number: 963
image: https://cdn.jasongaylord.com/images/2020/07/07/github-ci-cd-pull-request-integration.jpg
bitly: https://jasong.us/3f61JiG
---

GitHub has been spending a lot of time over the past few years improving their features above and beyond source control. One of the areas they have invested in is Pull Requests. I'll start by assuming that you have a branch in GitHub and changes have been pushed to that branch.

{% include open-thumbnail.html path="2020/07/07/github-pullrequest.jpg" alt="Start a Pull Request on GitHub" %}

Once you see this dialogue, this means that there are differences between the _master_ and your branch. 

{% include info-notice.html %}
GitHub will be renaming <em>master</em> to <em>main</em> soon. At the time of this post, <em>master</em> was still the default.<br/><br/>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It&#39;s a great idea and we are already working on this! cc <a href="https://twitter.com/billygriffin22?ref_src=twsrc%5Etfw">@billygriffin22</a></p>&mdash; Nat Friedman (@natfriedman) <a href="https://twitter.com/natfriedman/status/1271253144442253312?ref_src=twsrc%5Etfw">June 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
{% include end-notice.html %}

If you choose the _Compare & pull request_ button, the _Open a pull request_ window will appear. This will allow you to see the number of commits, files changed, and contributors for the pull request you are creating. It's recommended that you add a title and document the pull request so the reviewers will know what is changing.

{% include open-thumbnail.html path="2020/07/07/github-open-a-pull-request.jpg" alt="Open a pull request window" %}

You'll also notice that GitHub will check to see if the branch changes are able to merge into the _master_ branch. As you can see, my request can merge successfully. After pressing the _Create pull request_ button, I can proceed. However, I know that my repository is tied to a **GitHub Action** that will process every commit and pull request to ensure its safe to continue and deploy. It does this using Travis. I [posted about this back in May](https://jasong.us/3cBlugH). So, I'll wait approximately 1-2 minutes for the action to complete. While I'm waiting, I can see that the action is performing the check.

{% include open-thumbnail.html path="2020/07/07/github-ci-cd-pull-request-integration.jpg" alt="Travis-CI checking the Pull Request" %}

Once the request is complete, and I'm all green, I know it's safe to proceed.

{% include open-thumbnail.html path="2020/07/07/github-ci-cd-pull-request-integration-success.jpg" alt="Travis-CI successfully checked the Pull Request" %}

I can now choose to _Merge pull request_. When I choose that, I'll be asked to _Confirm merge_. After the merge is successful, I'll receive the response back and will now be allowed to safely _Delete branch_. This will allow me to delete the branch that I was working from. I can ignore this if I still need it.

{% include open-thumbnail.html path="2020/07/07/github-merge-complete-delete-branch.jpg" alt="GitHub Merge was completed and now I can delete the branch" %}

If I choose to delete the branch, I can always restore it.

{% include open-thumbnail.html path="2020/07/07/github-restore-branch.jpg" alt="Restore a branch in GitHub's Pull Request window" %}

## Summary
Hopefully this provided a good overview of the pull request process in GitHub. I'll use what I've covered above in future posts.