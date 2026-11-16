---
title: Graplet devlog 1
pub: 2026-11-16T20:13:00
---

The project has been for a long time in a <span class='amber'>prototype phase</span>,  
now it's come to a complete rewrite!

<div class='note'>

_The Reason behind a rewrite_  
The old Structure and Architecture was standing on _sticks and twigs_. It did work out well as a prototype, but was
not scalable at all. The new rewrite uses the old as inspiration, to learn from its
mistakes, and plans its Architecture beforehand, that's what _[Thobias](https://github.com/ThobiWanKenobi)_ and me are doing right now :sunglasses_cool:
</div>

And on a small note, it is way more fun to start from scratch on a project rather
than trying to finish something that's barely standing :rofl:

### First Architecture Changelog

Thobias first PR on Graplet just went through! Yay :>

_PR Description:_

> This is a suggestion for how to describe the project's folder structure in the Architecture.md document. Open for suggestions for improvement to wording, etc.

_<ins>What changed</ins>_: Architecture now has a thorough part on <span class='amber'>"Folder structure"</span>, explaining
_how_ folders should be arranged inside the app structure. If there's no folder structure,
it gets complicated _(very fast)_, harder to understand where things are. A tidy structure matters a _lot_, in this case :eyes:

### Tiny snippet

Here's a small snippet, from the *actual document on the project*:

```md
# Folder structure
We adopt a consistent strategy for maintaining folder structure. The app 
folder can contain various *domains* which are native to the Graplet
platform. In each domain, or within each subdomain, we have the following:
- A "main" component, typically with the name of the subdomain
- A folder "components" containing all the smaller intermediate components
- A folder "hooks" to contain all hooks defined for the domain/subdomain
- A folder "lib" to contain helper functions and utility functions used in components
```

That's it for today :D Bye bye!