# cfp.help (callForPapers.github.io)

Welcome to the CallForPapers (cfp.help) website where we aim to aggregate and display information about upcoming Call For Paper (CfPs) on technical conferences around the globe. In case you're wondering, a CfP is a call for speakers to submit their session proposals.

The site is a community-driven and maintained effort so we rely on community contributions to add new CfPs to the list. All help is welcome :)

###How to contribute
1. Fork the repository to your local machine
2. Open the `_data/conferences` directory
3. Add a new *.json file. Replace * with the name of the conference
4. Edit the following json to meet your needs:
```
  {
  	"name" : "ACCU",
  	"conferenceStart" : "2016-04-19",
  	"conferenceEnd" : "2016-04-23",
  	"callForPapersEnd" : "2015-11-13",
  	"url": "http://accu.org/index.php/conferences/accu_conference_2016/accu2016_call_for_sessions",
  	"lang": "en",
  	"location": "Bristol, United Kingdom",
  	"tags": "programmin, testing, architecture and design, development process, analysis, patterns, project management"
   }
```
5. Save the file
6. Commit your changes
7. Push the changes to your repository
8. Create a pull request either through the GUI, GitHub directory or tool of your choice
9. Pat yourself on the back for a job well done
10. Congratulations - you are now and Open Source contributor

If any of this is unclear, give us a shout and we'll be more than happy to help you out.
