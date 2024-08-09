PennController.ResetPrefix()

PennController.DebugOff()

PennController.Sequence ("Presentation","consentement","ParticipantName","intro","info","languages", "musique","casque", "part1",randomize("experiment1"),"Questions","send","conclusion")
    
    //"Presentation", "consentement", "ParticipantName","intro", "part1", randomize("experiment1"), "part2", randomize("experiment2"), "part3", randomize("experiment3"))"Presentation","consentement","ParticipantName","intro","info","languages", "musique","casque",

PennController("Presentation",
    newText("<p><strong>Bienvenue à l'expérience de reconnaissance de mots sifflés! <strong> </p> <p> Merci pour votre participation</p>")
        .center()
        .print()
    ,
    newText("<p> Cette expérience s'inscrit dans le cadre de la thèse de Anaïs Tran Ngoc à l'Université Nice Côte d'Azur et dans le laboratoire BCL du CNRS.</p><p> Elle durera environ 10 minutes (<strong>essayez de tout faire d'un trait</strong>) et se compose d'un petit questionnaire suivi d'une reconnaissance de mots sifflés, </p><p> suivie de quelques questions.</p><p></p><p>Je vous prie d'<strong>utiliser un casque ou des écouteurs</strong> au volume qui vous convient, et<strong> d'utiliser un ordinateur </strong> ou une tablette avec un clavier. </p>")
        .center()
        .print()
    ,
    newText("<p> Avant de commencer, la prochaine page vous demandera d'accepter le formulaire de consentement en guise de signature électronique. </p>")
        .center()
        .print()
    ,
    newButton("continuer")
        .center()
        .print()
        .wait()
)


PennController("consentement",
    newText("</p> Il m'a été proposé de participer à une étude sur la reconnaissance de mots sifflées.</p> <p> Cette expérience aura une durée d'environ 10 minutes et vous serez amenés à écouter des enregistrements de parole sifflée et tenter les reconnaître et les catégoriser. </p> <p> Afin d’éclairer ma décision, j’ai reçu et compris les informations suivantes : </p><p> 1) ma contribution à cette recherche est volontaire et je pourrai à tout moment interrompre ma participation si je le désire, sans avoir à me justifier. Ma décision de participer, de refuser de participer, ou de cesser de participer n’aura aucune incidence personnelle ou académique, etc.</p><p> 2) Je pourrai poser des questions au sujet de la recherche en tout temps en communiquant avec le responsable scientifique du projet par courrier électronique à atnlife@gmail.com y compris prendre connaissance des résultats de l’étude dans sa globalité lorsqu’elle sera achevée. </p><p> 3) Les données recueillies feront l'objet d'un traitement informatisé et demeureront strictement confidentielles (aucun renseignement qui puisse révéler votre identité ne sera dévoilé). Vous pouvez demander la rectification ou la suppression des informations vous concernant après la fin de votre participation en faisant la demande auprès de Anaïs Tran Ngoc. </p><p> 4) Les résultats de cette recherche sont susceptibles d’être diffusés dans des colloques et des articles de revue académique. Les données me concernant feront l'objet d'un traitement informatisé conformément à la loi n° 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel  et modifiant la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.</p> <p> En cochant la case ci-dessous, vous certifiez que vous avez lu et compris les renseignements ci-dessus, que vous avez obtenu des réponses satisfaisantes à vos questions et que vous avez été avisé que vous étiez libre d’annuler votre consentement ou de vous retirer de cette recherche en tout temps, sans préjudice.</p>")
        .css("border", "solid 1px black")
        .print()
    ,
    newScale("oui", "J’ai lu et compris les renseignements ci-dessus et j’accepte de plein gré de participer à cette recherche.")
        .labelsPosition("right")
        .center()
        .print()
        .wait()
)
PennController(
    newVar("ParticipantName")
        .global()
)
.log( "Name" , getVar("ParticipantName"))

//Info - name, age, firstlanguage, languages, instruments, casque

// This log command adds a column reporting the participant's name to every line saved to the results
newTrial( "intro" ,
    newText("<p>Veuillez écrire votre prénom ci-dessous et appuyer sur 'entrée'.</p>")
        .print()
    ,
    newTextInput()
        .print()
        .wait()                 // The next command won't be executed until Enter is pressed
        .setVar( "ParticipantName" )
        // This setVar command stores the value from the TextInput element into the Var element
)

PennController( "info",
    newText("<p>Avant de commencer veuillez répondre à quelques questions:</p><p>Quel age avez-vous?</p>")
        .print()
    ,
    newTextInput("Age")
        .log()
        .print()
    ,
    newText("<p>Quel est votre genre?</p>")
        .print()
    ,
    newTextInput("Genre")
        .log()
        .print() 
    ,
    newText("<p>Quelle est votre langue maternelle?</p>")
        .print()
    ,
    newTextInput("Firstlanguage")
        .log()
        .print()        
    ,
    newText("<p>Avez vous des troubles du langage ou de l'audition? (Précisez)</p>")
        .print()
    ,
    newTextInput("troubles")
        .log()
        .print() 
    ,
    newText("<p>Avez-vous déjà participé aux expériences portant sur les phonèmes de la parole sifflée?</p>")
        .print()
    ,
    newScale("expe avant", "oui","non")
        .print()
        .log()
    ,
    newButton("continuer")
        .print()
        .wait()
)

PennController("languages",
    newText("<p>Quelles langues parlez-vous et quel est votre niveau? </p>")
        .print()
    ,
    newTextInput("LV2")
        .settings.size(260,25)
        .log()
    ,
    newScale("LevelLV2", "Débutant", "Intermédiaire","Courant")
        .settings.size(400,50)
        .log()
    ,
    newTextInput("LV3")
        .settings.size(260,25)
        .log()
    ,
    newScale("LevelLV3", "Débutant", "Intermédiaire","Courant")
        .settings.size(400,50)
        .log()
    ,
    newTextInput("LV4")
        .settings.size(260,25)
        .log()
    ,
    newScale("LevelLV4", "Débutant", "Intermédiaire","Courant")
        .settings.size(400,50)
        .log()
    ,
        newTextInput("LV5")
        .settings.size(260,25)
        .log()
    ,
    newScale("LevelLV5", "Débutant", "Intermédiaire", "Courant")

        .settings.size(400,50)
        .log()
    ,
    newCanvas(700,700)
        .settings.add(0,20, getTextInput("LV2"))
        .settings.add(275,10, getScale("LevelLV2"))
        .settings.add(0,50, getTextInput("LV3"))
        .settings.add(275,40, getScale("LevelLV3"))
        .settings.add(0,80, getTextInput("LV4"))
        .settings.add(275,70,getScale("LevelLV4"))
        .settings.add(0,110, getTextInput("LV5"))
        .settings.add(275,100, getScale("LevelLV5"))
        .settings.add(500,500, getButton("Suivant"))
        .print()
    ,
    newButton("Suivant", "Suivant")
        .print()
        .wait(getTextInput("LV2").testNot.text("")) 
)

PennController("musique",
    newText("<p>Quel(s) instrument(s) jouez-vous et quel est votre niveau sur cet instrument (lieu d'études/travail, nombre d'années)?</p><p><strong>Si vous ne jouez pas d'instrument, cliquez directement sur 'Suivant'.<strong></p>")
        .print()
    ,
    newTextInput("Instr1", "Instrument:")
        .settings.size(250,50)
        .log()
    ,
    newTextInput("Instr1background", "Lieux d'études (ou de travail) musical/nombre d'années:")
        .settings.size(450,50)
        .log()
    ,
    newScale("Niveau", "Débutant", "Amateur","Confirmé", "Diplome DEM", "Diplome Superieur", "Professionnel")
        .labelsPosition("right")
        .settings.size(700,25)
        .log()
    ,
    newCanvas(700,110)
        .settings.add(0,0, getTextInput("Instr1"))
        .settings.add(275,0, getTextInput("Instr1background"))
        .settings.add(0,50, getScale("Niveau"))
        .print()
    ,
    newTextInput("Instr2")
        .settings.size(250,25)
        .log()
    ,
    newTextInput("Instr2background")
        .settings.size(450,25)
        .log()
    ,
    newScale("NiveauInstr2", "Débutant", "Amateur","Confirmé", "Diplome DEM", "Diplome Superieur", "Professionnel")
        .labelsPosition("right")
        .settings.size(700,25)
        .log()
    ,
    newCanvas(700,110)
        .settings.add(0,0, getTextInput("Instr2"))
        .settings.add(275,0, getTextInput("Instr2background"))
        .settings.add(0,50, getScale("NiveauInstr2"))
        .print()
    ,
    newTextInput("Instr3")
        .settings.size(250,25)
        .log()
    ,
    newTextInput("Instr3background")
        .settings.size(450,25)
        .log()
    ,
    newScale("NiveauInstr3", "Débutant", "Amateur","Confirmé", "Diplome DEM", "Diplome Superieur", "Professionnel")
        .labelsPosition("right")
        .settings.size(700,25)
        .log()
    ,
    newCanvas(700,110)
        .settings.add(0,0, getTextInput("Instr3"))
        .settings.add(275,0, getTextInput("Instr3background"))
        .settings.add(0,50, getScale("NiveauInstr3"))
        .print()
    ,
    newTextInput("Instr4")
        .settings.size(250,25)
        .log()
    ,
    newTextInput("Instr4background")
        .settings.size(450,25)
        .log()
    ,
    newScale("NiveauInstr4", "Débutant", "Amateur","Confirmé", "Diplome DEM", "Diplome Superieur", "Professionnel")
        .labelsPosition("right")
        .settings.size(700,25)
        .log()
    ,
    newCanvas(700,110)
        .settings.add(0,0, getTextInput("Instr4"))
        .settings.add(275,0, getTextInput("Instr4background"))
        .settings.add(0,50, getScale("NiveauInstr4"))
        .print()
    ,
    newText("<p> Avez-vous l'oreille absolue?</p>")
        .print()
    ,
    newScale("Oreille absolue", "Oui", "Seulement pour certaines notes","Oreille relative", "Non")
        .labelsPosition("right")
        .print()
        .log()
    ,
    newButton("Suivant")
        .print()
        .wait()
    
)

PennController("casque",
    newText("<p> Quel type de casque utilisez-vous, et quelle est la marque?</p>")
        .print()
    ,
    newTextInput("marque", "Nom de la marque/modèle:")
        .settings.size(600,25)
        .log()
    ,
    newScale("casquetype", "écouteurs (dans les oreilles)", "casque (autour des oreilles)", "casque (sur les oreilles)", "haut-parleurs")
        .labelsPosition("right")
        .settings.size(900,50)
        .log()
    ,
    newCanvas(900,100)
        .settings.add(0,0, getScale("casquetype"))
        .settings.add(0,50, getTextInput("marque"))
        .print()
    ,
    newButton("suivant")
        .print()
        .wait()
)


PennController("part1",
    newText("<p>Lors de cette expérience, vous allez entendre un mot sifflé et il faudra choisir le mot qui correspond au sifflement que vous avez entendu.</p><p>Ecoutez un exemple de mot sifflé <strong>(ici le mot 'pâté')</strong> en cliquant 'PLAY', et profitez-en pour bien régler le son de vos écouteurs/casque</p>")
        .print()
    ,
    newAudio("exemple","https://static.wixstatic.com/mp3/39bc6a_e5cb2c8973a04e35aff4ebed8051943a.wav")
    ,
    newButton("play","PLAY")
        .callback(
            getAudio("exemple")
                .stop()
                .play()
        )
            
        .print()
    ,
    newText("<p>Les choix de réponse sera présenté de la manière suivante : </p>")
        .print()
    ,
    newDropDown("example","...")
        .add("PATE","SAUNA","CASSIS","PIQUET", "PERIL")
        .print()
    ,
    // newButton("correct", "vérifier la réponse")
   //     .print()
     //   .wait()
    
    //,getDropDown("example")
    //    .test.selected("PATE")
    //        .success( newText("correct", "BRAVO!").size(40,40).center().print())
    //        .failure( newText("wrong", "Non, ce n'etait pas ce mot. Réessayez").size(40,40).center().print()
    newText("<p>Vous devez chosir le mot qui correspond au sifflement et appuyer sur me bouton 'suivant' pour passer au prochain son.<p/><p> Appuyez sur 'commencer' pour démarrer l'expérience.</p>")
        .print()
    ,
    newButton("Commencer")
        .print()
        .wait()
)

PennController.Template("part1table.csv",
    variable => PennController ("experiment1",
        newAudio ("word", variable.recording)
            .play()
        ,
        newDropDown("Choice", "...")
            .add( variable.corrans)
            .add( variable.poss1)
            .add( variable.poss2)
            .add( variable.poss3)
            .add( variable.poss4)
            .shuffle()// Randomly order the options in the list 
            .print()
            .wait()
            .log()                              // Make sure to log the participant's selection
        ,
        newButton("Suivant")
            .print()
            .wait()
        ,
        getAudio("word")
            .wait("first")
        )
    .log("name", getVar("ParticipantName"))
    .log("recording", variable.Nom)
    .log("Answer", variable.corrans)
    .log("group", variable.Group)
)

PennController("part2",
    newText("<p>Vous procederez maintenant à la partie 2. Vous allez entendre un mot sifflé et il faudra choisir le mot qui correspond le mieux avec le sifflement que vous avez entendu, mais cette fois nous vous indiquerons si c'était la bonne ou mauvaise réponse.</p>")
        .print()
    ,
    newButton("Suivant")
        .print()
        .wait()
)

PennController.Template("wordstable.csv",
    variable => PennController ("experiment2",
        newTimer("waitrec",300)
            .start()
            .wait()
        ,
        newAudio ("word", variable.recording)
            .play()
        ,
        newScale("trainingwords", variable.word1, variable.word2, variable.word3, variable.word4)
        .size(600,200)
        .print()
        .wait("first")
        ,
        getScale("trainingwords")
            .test.selected(variable.corrans)
            .success( newText("correct", "BRAVO!").center().bold().color("red").size(40,40).print())
            .failure( newText("wrong", "Non, ce n'etait pas ce mot").center().bold().color("red").print())
            .log()
        ,
        newTimer("waitans",800)
            .start()
            .wait()
        ,
        newButton("next","next")
            .print()
            .wait()
        )
    .log("recording", variable.Nom)
    .log("name",getVar("ParticipantName"))
    .log("Group", variable.Group)
)

PennController("part3",
    newText("<p>Vous procederez maintenant à la partie 3. Comme dans la partie 1, vous allez entendre un mot sifflé et il faudra choisir le mot qui correspond le mieux avec le sifflement que vous avez entendu.</p>")
        .print()
    ,
    newButton("Suivant")
        .print()
        .wait()
)

PennController.Template("part3table.csv",
    variable => PennController ("experiment3",
        newAudio ("wordpt3", variable.recording)
            .play()
        ,
        newDropDown("choices2", "...")
            .add( variable.corrans)
            .add( variable.poss1)
            .add( variable.poss2)
            .add( variable.poss3)
            .add( variable.poss4)
            .shuffle()
            .add("aucune de ces options")// Randomly order the options in the list (Pronoun1 and Pronoun2)                          // Disable the list after the first selection
            .print()
            .wait()
            .log()                              // Make sure to log the participant's selection
        ,
        newButton("Next")
            .print()
            .wait()
        )
    .log("recording", variable.Nom)
    .log("Answer", variable.corrans)
    .log("name",getVar("ParticipantName"))
)


PennController.Template("part3table.csv",
    variable => PennController ("experiment4",
        newAudio ("wordpt3", variable.recording)
            .play()
        ,
        newText("whichword", "<p>Quel mot pensez vous avoir entendu?</p>") 
        ,
        newText("wordlist","<p>bateau</p><p>béquille</p><p>cassis</p><p>cocher</p><p>copie</p><p>dépôt</p><p>finale</p><p>fossé</p><p>kilo</p><p>chameau</p><p>mégot</p><p>péril</p><p>passé</p><p>pétard</p><p>piquet</p><p>police</p><p>sachet</p><p>sauna</p><p>sirop</p><p>soda</p><p>tapis</p><p>têtard</p><p>ticket</p><p>tisane</p>")
        ,
        newTextInput("wordheard")
            .log()                              // Make sure to log the participant's selection
        ,
        newCanvas(800,800)
        .settings.add(300,0, getText("whichword"))
        .settings.add(0,50, getText("wordlist"))
        .settings.add(300,300, getTextInput("wordheard"))
        .settings.add("center at 50%", "center at 50%", getButton("valider"))
        .print()
        ,
        newButton("valider","valider")
        .print()
        .wait(getTextInput("wordheard").testNot.text("") )
        )
    .log("recording", variable.Nom)
    .log("name",getVar("ParticipantName"))
)

PennController("Questions",
        newText("<p> Décrivez la méthode que vous avez utilisée pour identifier les mots.</p><p>Est-ce que certains mots étaient plus faciles à reconnaître? Pourquoi?</p>")
        .print()
    ,
        newTextInput("Methode")
        .log()
        .lines(0)
        .size(400, 200)
        .print()
    ,
    newButton("send", "Envoyer")
        .print()
        .wait()
)

PennController.SendResults("send")

PennController("conclusion",
    newText("<p>Bravo et merci pour votre participation!</p> <p> Si vous avez des questions ou vous souhaitez plus d'informations sur vos résultats contactez-moi à l'adresse suivante: atnlife@gmail.com </p>")
        .print()
    ,
    newText("<p>Vous pouvez maintenant fermer cette fenêtre.</p>")
        .print()
        .wait()
)

