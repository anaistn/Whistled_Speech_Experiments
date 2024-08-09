PennController.ResetPrefix(null) // Shorten command names (keep this line here)

PennController.Sequence("Presentation", "consentement","intro", "info", "languages", "musique", "casque", "Instructions1","exposure", "Instructions2","Schema","Instructions3", randomize("experiment1"), "merci","Instructions4", shuffle("k-parlesiffle", "s-parlesiffle", "t-parlesiffle", "p-parlesiffle"), "Instructions5", shuffle("k1","k1","k1","k1","p1","p1","p1","p1","s1","s1","s1","s1","t1","t1","t1","t1"), "merci2", "Instructions6", randomize("experiment2"),"merci3","ConsQuestions","Instructions7","Schema1","Instructions8", randomize("experiment3"),"Instructions9",randomize("experiment4"),"Instructions10", randomize("experiment5"),"Instructions11","VowQuestions", "send","conclusion")


PennController.DebugOff()
//Presentation et consentement

PennController("Presentation",
    newText("<p><strong>Bienvenue à l'expérience de reconnaissance de consonnes et de voyelles sifflées<strong> </p> <p> Merci pour votre participation</p>")
        .center()
        .print()
    ,
    newText("<p> Cette expérience s'inscrit dans le cadre de la thèse de Anaïs Tran Ngoc à l'Université Nice Côte d'Azur et dans le laboratoire BCL du CNRS.</p><p> Elle durera entre 20 et 30 minutes (<strong>essayez de tout faire d'un trait</strong>) et se compose d'un petit questionnaire suivi de 2 parties principales: </p><p> l'une sur la reconnaissance de consonnes, et l'autre sur la reconnaissance des voyelles.</p><p>Chaque partie comprend 3 sous-parties. </p><p></p><p>Je vous prie d'<strong>utiliser un casque ou des écouteurs</strong> au volume qui vous convient, et<strong> d'utiliser un ordinateur </strong> ou une tablette avec un clavier. </p>")
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
    newText("</p> Il m'a été proposé de participer à une étude sur la reconnaissance de consonnes et de voyelles sifflées en Silbo.</p> <p> Cette expérience aura une durée d'environ 30 minutes et vous serez amenés à écouter des enregistrements de parole sifflée et tenter les reconnaître et les catégoriser. </p> <p> Afin d’éclairer ma décision, j’ai reçu et compris les informations suivantes : </p><p> 1) ma contribution à cette recherche est volontaire et je pourrai à tout moment interrompre ma participation si je le désire, sans avoir à me justifier. Ma décision de participer, de refuser de participer, ou de cesser de participer n’aura aucune incidence personnelle ou académique, etc.</p><p> 2) Je pourrai poser des questions au sujet de la recherche en tout temps en communiquant avec le responsable scientifique du projet par courrier électronique à atnlife@gmail.com y compris prendre connaissance des résultats de l’étude dans sa globalité lorsqu’elle sera achevée. </p><p> 3) Les données recueillies feront l'objet d'un traitement informatisé et demeureront strictement confidentielles (aucun renseignement qui puisse révéler votre identité ne sera dévoilé). Vous pouvez demander la rectification ou la suppression des informations vous concernant après la fin de votre participation en faisant la demande auprès de Anaïs Tran Ngoc. </p><p> 4) Les résultats de cette recherche sont susceptibles d’être diffusés dans des colloques et des articles de revue académique. Les données me concernant feront l'objet d'un traitement informatisé conformément à la loi n° 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel  et modifiant la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.</p> <p> En cochant la case ci-dessous, vous certifiez que vous avez lu et compris les renseignements ci-dessus, que vous avez obtenu des réponses satisfaisantes à vos questions et que vous avez été avisé que vous étiez libre d’annuler votre consentement ou de vous retirer de cette recherche en tout temps, sans préjudice.</p>")
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
    newText("<p>Quel est votre genre de naissance?</p>")
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
    newButton("continuer")
        .print()
        .wait()
)

PennController("languages",
    newText("<p>Quelles langues parlez-vous et quel est votre niveau? </p>")
        .print()
    ,
    newTextInput("LV1")
        .settings.size(260,25)
        .log()
    ,
    newScale("Level", "Débutant", "Intermédiaire","Courant")
        .labelsPosition("top")
        .settings.size(400,50)
        .log()
    ,
    newCanvas(700,50)
        .settings.add(0,20, getTextInput("LV1"))
        .settings.add(275,0, getScale("Level"))
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
    newCanvas(700,50)
        .settings.add(0,20, getTextInput("LV2"))
        .settings.add(275,20, getScale("LevelLV2"))
        .print()
    ,
    newTextInput("LV3")
        .settings.size(260,25)
        .log()
    ,
    newScale("LevelLV3", "Débutant", "Intermédiaire","Courant")
        .settings.size(400,50)
        .log()
    ,
    newCanvas(700,50)
        .settings.add(0,20, getTextInput("LV3"))
        .settings.add(275,20, getScale("LevelLV3"))
        .print()
    ,
        newTextInput("LV4")
        .settings.size(260,25)
        .log()
    ,
    newScale("LevelLV4", "Débutant", "Intermédiaire", "Courant")

        .settings.size(400,50)
        .log()
    ,
    newCanvas(700,50)
        .settings.add(0,20, getTextInput("LV4"))
        .settings.add(275,20, getScale("LevelLV4"))
        .print()
    ,
    newButton("Suivant")
        .print()
        .wait()
    
)

PennController("musique",
    newText("<p>Quel(s) instrument(s) jouez-vous et quel est votre niveau sur cet instrument (lieu d'études/travail, nombre d'années)?</p><p>Si vous ne jouez pas d'instrument, cliquez directement sur 'Suivant'.</p>")
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
        .settings.size(600,25)
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
        .settings.size(600,25)
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
        .settings.size(600,25)
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
        .settings.size(600,25)
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

//Consonant recognition-part 1
PennController("Instructions1",
    newText("<p>Dans cette étude, vous devez catégoriser des consonnes qui sont sifflées. </p><p> Dans un premier temps vous allez entendre 4 exemples de consonnes sifflées précédées et suivies par la voyelle “a” (comme “ata” ou “aka”). </p><p> Avant de commencer, vous entendrez quelques exemples de consonnes sifflées pour vous familiariser avec ce type de son. </p><p>Profitez de ce moment pour ajuster le volume. </p><p> Appuyez sur 'Ecouter' pour les entendre.</p>")
        .print()
    ,
    newButton("Ecouter")
        .print()
        .wait()
)

PennController("exposure",
    newImage("sound_icon2.png")
        .print()
    ,
    randomAudios = ["https://static.wixstatic.com/mp3/39bc6a_f494c5ba12d043b2aa9679cac806a6bd.wav","https://static.wixstatic.com/mp3/39bc6a_bdbf03d9f67a4705babc8390414141ac.wav","https://static.wixstatic.com/mp3/39bc6a_aaf86307e9c8479f938fab2e09523615.wav","https://static.wixstatic.com/mp3/39bc6a_7de2bf74fb674b2da4912aaf35c0876a.wav"],fisherYates(randomAudios)
    ,
    newAudio(randomAudios[0])
        .play()
        .wait()
    ,
    newTimer(700)
        .start()
        .wait()
    ,
    newAudio(randomAudios[1])
        .play()
        .wait()
    ,
        newTimer(700)
        .start()
        .wait()
    ,
        newAudio(randomAudios[2])
        .play()
        .wait()
    ,
        newTimer(700)
        .start()
        .wait()
    ,    
    newAudio(randomAudios[3])
        .play()
        .wait()
    ,
        newTimer(600)
        .start()
        .wait()
    ,
        newButton("Suivant")
        .print()
        .wait()

)

PennController("Instructions2",
    newText("<p>Dans cette étude, vous allez entendre des consonnes sifflées (précedées et suivies par la voyelle “a”) après chaque consonne vous devrez répondre à la question suivante:</p><p> “Pensez vous que vous venez d’entendre “aka”, “ata”, “apa” ou “assa”?”</p><p> Pour cela vous devrez choisir une des 4 consonnes possibles (‘k’, ‘t’, ‘p’, ‘s’) </p><p> en cliquant sur <strong>la flèche de votre clavier</strong> correspondant à la consonne. </p><p> Appuyer sur 'voir schéma' pour voir l'attribution des <strong>flèches du clavier</strong> à chaque consonne. </p><p> Cette image sera affichée pendant l'expérience.</p>")
        .print()
    ,
    newButton("Voir schéma")
        .print()
        .wait()
)

PennController("Schema",
    newImage("answerimage.png")
        .settings.size (800,400)
        .print()
    ,
    newButton("suivant")
        .print()
        .wait()
)

PennController("Instructions3", 
    newText("<p>En appuyant sur la flèche de votre clavier correspondant à la lettre que vous pensez entendre, </p> <p>votre réponse sera automatiquement enregistrée et vous passerez directement au prochain son. </p> <p>Vous ne pouvez pas réécouter le son que vous venez d'entendre. </p> <p>Appuyez ci-dessous pour commencer la reconnaissance.</p>")
        .center()
        .print()
    ,
    newButton("Commencer")
        .print()
        .wait()
)

PennController.Template("Classeurpartie1cons.csv",
    variable => PennController ("experiment1",
        newAudio("fourconsonants",variable.Audiofile1)
            .play()
        ,
        newImage("answerimage",variable.answerimage)
            .settings.size (800,400)
            .print()
        ,
        newKey( "F", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight")
            .settings.log()
            .wait()
                ,
        getAudio("fourconsonants")
            .wait("first")
        ,
        newTimer(700)
            .start()
            .wait()
        )
    .log("Name", getVar("ParticipantName"))
    .log("Letter", variable.Letter )
    .log("CorrAns", variable.CorrAns )
)

PennController("merci",
    newText("<p>Merci, nous allons maintenant passer à une phase d'entrainement</p>")
        .print()
    ,
    newButton("Suivant")
        .print()
        .wait()
)

//Consonant recognition-part 2

PennController("Instructions4",
    newText("<p>Dans cette deuxième partie, vous allez effectuer un entraînement de reconnaissance de consonnes sifflées </p><p> dans lequel nous allons vous aider à vous améliorer. </p> <p>Dans un premier temps vous allez entendre chaque consonne en version parlée, suivie de sa version sifflée. </p><p> Appuyez sur la touche “espace” pour commencer.</p>")
        .print()
    ,
    newKey("")
        .print()
        .wait()
)

PennController("k-parlesiffle",
    newAudio("akaps","https://static.wixstatic.com/mp3/39bc6a_3822461a0e294fbeb7bb527faa4a89ff.wav")
        .play()
        .log()
    ,
    newImage("K","K.png")
        .print()
    ,
    getAudio("akaps")
        .wait("first")
    ,
    newTimer(400)
        .start()
        .wait()
)

PennController("p-parlesiffle",
    newAudio("apaps","https://static.wixstatic.com/mp3/39bc6a_f14a1781404546b8a2c427b88f8ce2e2.wav")
        .play()
        .log()
    ,
    newImage("P","P.png")
        .print()
    ,
    getAudio("apaps")
        .wait("first")
    ,
    newTimer(400)
        .start()
        .wait()
)

PennController("s-parlesiffle",
    newAudio("asaps","https://static.wixstatic.com/mp3/39bc6a_a8cf9dc1931242bd94dfbba1d5615cc2.wav")
        .play()
        .log()
    ,
    newImage("S","S.png")
        .print()
    ,
    getAudio("asaps")
        .wait("first")
    ,
    newTimer(400)
        .start()
        .wait()
)

PennController("t-parlesiffle",
    newAudio("ataps","https://static.wixstatic.com/mp3/39bc6a_30da900a82794e99a1149443e673550d.wav")
        .play()
        .log()
    ,
    newImage("T","T.png")
        .print()
    ,
    getAudio("ataps")
        .wait("first")
    ,
    newTimer(400)
        .start()
        .wait()
)

PennController("Instructions5",
    newText("<p> Vous allez maintenant effectuer un entraînement qui ressemble à la première partie de la reconnaissance des consonnes.</p><p> Vous allez entendre une consonne sifflée et répondre avec les flèches correspondant à chaque consonne.</p><p> Après chaque réponse, nous vous indiquerons si vous avez répondu avec la bonne ou mauvaise consonne.</p><p> Appuyez sur la touche “espace” pour commencer.</p>")
        .print()
    ,
    newKey("")
        .wait()
)

PennController("k1",
    newTimer(200)
        .start()
        .wait()
    ,
    newAudio("aka","https://static.wixstatic.com/mp3/39bc6a_7de2bf74fb674b2da4912aaf35c0876a.wav")
        .play()
        .log()
    ,
     newImage("answerimage.png")
        .settings.size (800,400)
        .print()
    ,
    newKey("consonant", "ArrowDown","ArrowUp","ArrowLeft", "ArrowRight")
        .wait()
    ,
    getKey("consonant")
        .test.pressed( "ArrowDown")
        .failure( newText("wrong", "Non, ce n'était pas cette consonne").center().bold().color("red").print())
        .success(newText("correct", "BRAVO!").center().bold().color("red").size(40,40).print())
        .log()
    ,
    newTimer(1500)
        .start()
        .wait()
)

PennController("p1",
    newTimer(200)
        .start()
        .wait()
    ,
    newAudio("apa","https://static.wixstatic.com/mp3/39bc6a_352c86d2abd2454db9cc31af11afcf01.wav")
        .play()
        .log()
    ,
     newImage("answerimage.png")
        .settings.size (800,400)
        .print()
    ,
    newKey("consonant", "ArrowDown","ArrowUp","ArrowLeft", "ArrowRight")
        .wait()
    ,
    getKey("consonant")
        .test.pressed( "ArrowRight")
        .failure( newText("wrong", "Non, ce n'était pas cette consonne").center().bold().color("red").print())
        .success(newText("correct", "BRAVO!").center().bold().color("red").size(40,40).print())
        .log()
    ,
    newTimer(1500)
        .start()
        .wait()
)

PennController("s1",
    newTimer(200)
        .start()
        .wait()
    ,
    newAudio("asa","https://static.wixstatic.com/mp3/39bc6a_bdbf03d9f67a4705babc8390414141ac.wav")
        .play()
        .log()
    ,
     newImage("answerimage.png")
        .settings.size (800,400)
        .print()
    ,
    newKey("consonant", "ArrowDown","ArrowUp","ArrowLeft", "ArrowRight")
        .wait()
    ,
    getKey("consonant")
        .test.pressed( "ArrowLeft")
        .failure( newText("wrong", "Non, ce n'était pas cette consonne").center().bold().color("red").print())
        .success(newText("correct", "BRAVO!").center().bold().color("red").size(40,40).print())
        .log()
    ,
    newTimer(1500)
        .start()
        .wait()
)

PennController("t1",
    newTimer(200)
        .start()
        .wait()
    ,
    newAudio("ata","https://static.wixstatic.com/mp3/39bc6a_f494c5ba12d043b2aa9679cac806a6bd.wav")
        .play()
        .log()
    ,
     newImage("answerimage.png")
        .settings.size (800,400)
        .print()
    ,
    newKey("consonant", "ArrowDown","ArrowUp","ArrowLeft", "ArrowRight")
        .wait()
    ,
    getKey("consonant")
        .test.pressed( "ArrowUp")
        .failure( newText("wrong", "Non, ce n'était pas cette consonne").center().bold().color("red").print())
        .success(newText("correct", "BRAVO!").center().bold().color("red").size(40,40).print())
        .log()
    ,
    newTimer(1500)
        .start()
        .wait()
)

PennController("merci2",
    newText("<p> Merci, cette partie est terminée, appuyez sur la touche “espace” pour passer à la dernière section de la partie consonne.</p>")
        .print()
    ,
        newKey("")
        .wait()
)

//Consonant recognition-part 3

PennController("Instructions6",
    newText("<p>Dans la troisième partie de la reconnaissance des consonnes, il faudra indiquer la consonne sifflée grâce au clavier de la même manière que dans la première. </p><p> Appuyez sur la touche “espace” pour commencer.</p>")
        .print()
    ,
    newKey("")
        .wait()
)

PennController.Template("Finalecons.csv",
    variable => PennController ("experiment2",
        newAudio("fourconsonants",variable.audiofilefinal)
            .play()
        ,
        newImage("answerimage",variable.answerimage)
            .settings.size (800,400)
            .print()
        ,
        newKey("F", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight")
            .settings.log()
            .wait()
        ,
        getAudio("fourconsonants")
            .wait("first")
        ,
        newTimer(700)
            .start()
            .wait()
        )
    .log("Name", getVar("ParticipantName"))
    .log("Letter", variable.Letter )
    .log("CorrAns", variable.CorrAns )
)

PennController("merci3",
    newText("<p> Merci, cette partie est terminée. </p><p> Vous répondrez maintenant à quelques questions sur la reconnaissance que vous venez de faire avant de passer à la reconnaissance de voyelles.</p> <p> Appuyez sur la touche espace pour continuer</p>")
        .print()
    ,
    newKey("")
        .wait()
)

//Questionnaire après consonnes

PennController("ConsQuestions",
    newText("<p> Est-ce que l'entraînement (où nous avons indiqué si vous aviez répondu avec la bonne ou mauvaise réponse) </p> <p> vous a aidé à reconnaître et catégoriser les consonnes? Pourquoi, ou pourquoi pas?</p>")
        .print()
    ,
    newTextInput("ConsQ1")
        .log()
        .lines(0)
        .size(400, 200)
        .print()
    , 
        newText("<p> Décrivez la méthode que vous avez utilisée pour identifier les consonnes avant et après l'entraînement.</p><p>Est-ce que certaines consonnes étaient plus faciles à reconnaître? Pourquoi?</p>")
        .print()
    ,
        newTextInput("ConsQ2")
        .log()
        .lines(0)
        .size(400, 200)
        .print()
    ,
    newButton("send", "Envoyer")
        .print()
        .wait()
)

//Voyelles-Part1

PennController("Instructions7",
    newText("<p>Vous allez maintenant passer à la reconnaissance de voyelles sifflées. </p><p> Ces sifflements correspondent aux voyelles 'i', 'é', 'a' ou 'o'. </p><p>Vous répondrez avec les flèches correspondant aux voyelles selon le schéma suivant. </p><p>Ce schéma sera affiché pendant les trois parties de l'expérience.</p>")
        .print()
    ,
        newButton("Voir schéma")
        .print()
        .wait()
)

PennController("Schema1",
    newImage("imagevoy.png")
        .settings.size (800,400)
        .print()
    ,
    newButton("suivant")
        .print()
        .wait()
)

PennController("Instructions8",
    newText("<p> Vous allez maintenant compléter la première partie de cette expérience en selectionnant les voyelles correspondant le mieux avec ce que vous avez entendu (entre 'i', 'é', 'a' et 'o'). </p> <p>Votre choix vous fera passer à la prochaine voyelle. Vous ne pourrez pas entendre ces voyelles plusieurs fois. </p> <p> Appuyez sur la touche espace pour commencer.</p>")
        .print()
    , 
    newKey("")
        .wait()
    )

PennController.Template("Conditionswhistler1and2.csv",
    variable => PennController ("experiment3",
        newImage("imagevoy", variable.imagevoy)
            .size(700,400)
            .print()
        ,
        newTimer(200)
            .start()
            .wait()
        ,
        newAudio("vowels",variable.Audiofile3)
            .play()
        ,
        newKey( "F", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight")
            .settings.log()
            .wait()
        ,
        getAudio("vowels")
            .wait("first")
        ,
        newTimer(500)
            .start()
            .wait()
        
        )
    .log("Name", getVar("ParticipantName"))
    .log("Vowel", variable.Vowel)
    .log("Group", variable.Group)
    .log("CorrAns", variable.CorrAns )
)

//Voyelles-Part2

PennController("Instructions9",
    newText("<p> Merci.</p> <p> Vous allez maintenant vous entraîner sur les voyelles que vous venez d'entendre. </p> <p> Appuyez sur la touche 'espace' pour continuer.</p>")
        .print()
    , 
    newKey("")
        .wait()
    )

PennController.Template("Conditionstrainingwhist1.csv",
    variable => PennController ("experiment4",
        newImage("imagevoy", variable.imagevoy)
            .size(700,400)
            .print()
        ,
        newAudio("vowels",variable.Audiofile4)
            .play()
        ,
        newKey( "consonant1", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight")
            .settings.log()
            .wait()
        ,
        getKey("consonant1")
            .test.pressed(variable.CorrAnsTrain)
            .failure( newText("wrong", "Non, ce n'était pas cette voyelle").center().bold().color("red").print())
            .success(newText("correct", "BRAVO!").center().bold().color("red").size(40,40).print())
            .log()
        ,
        newTimer(1000)
            .start()
            .wait()
        
        )
    .log("Name", getVar("ParticipantName"))
    .log("Vowel", variable.Vowel)
    .log("Group", variable.Group)
    .log("CorrAns", variable.CorrAnsTrain)
)

//Voyelles-Part3

PennController("Instructions10",
    newText("<p>Merci.</p><p>Vous allez maintenant passer à la dernière partie de l'expérience. </p> <p> Répondez avec les flèches pour indiquer la voyelle que vous venez d'entendre.</p> <p> Appuyez sur la touche 'espace' pour continuer.</p>")
        .print()
    ,
    newKey("")
        .wait()
)

PennController.Template("Conditionswhistler2and1.csv",
    variable => PennController ("experiment5",
        newImage("imagevoy", variable.imagevoy)
            .size(700,400)
            .print()
        ,
        newTimer(200)
            .start()
            .wait()
        ,
        newAudio("vowels",variable.Audiofile5)
            .play()
        ,
        newKey( "F", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight")
            .settings.log()
            .wait()
        ,
            getAudio("vowels")
            .wait("first")
        ,
        newTimer(500)
            .start()
            .wait()
        
        )
    .log("Name", getVar("ParticipantName"))
    .log("Vowel", variable.Vowel)
    .log("Group", variable.Group)
    .log("CorrAns", variable.CorrAns )
)

PennController("Instructions11",
    newText("<p> Merci, veuillez répondre aux questions suivantes avant de conclure.</p>")
        .print()
    ,
    newButton("Questions et conclusion")
        .print()
        .wait()
)

PennController("VowQuestions",
    newText("<p> Est-ce que l'entraînement (où nous avons indiqué si vous aviez répondu avec la bonne ou mauvaise réponse) </p> <p> vous a aidé à reconnaître et catégoriser les voyelles? Pourquoi, ou pourquoi pas?</p>")
        .print()
    ,
    newTextInput("VowelQ1")
        .log()
        .lines(0)
        .size(400, 200)
        .print()
    , 
        newText("<p> Décrivez la méthode que vous avez utilisée pour identifier les voyelles avant et après l'entraînement.</p><p>Est-ce que certaines voyelles étaient plus faciles à reconnaître? Pourquoi?</p>")
        .print()
    ,
        newTextInput("VowelQ2")
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
    newButton("valider")
        .wait()
)

