export const TEXT = {
  acceuil: {
    titre: "Jugement Majoritaire",
    presentation:
      "Une décision collective à prendre avec toutes les personnes présentes ?",
    btnPrimary: "créer une urne",
    btnSecondary: "comment ça marche ?",
  },
  commentCaMarche: [
    {
      title: "Créez un scrutin",
      text: "Pour créer un scrutin sur ce mobile ou cette tablette, entrez un titre ainsi que les différentes propositions sur lesquelles vous souhaitez que les personnes présentes donnent leur avis.",
    },
    {
      title: "Votez sereinement",
      text: "Les résultats sont protégés par un mot de passe pour que vous puissiez vous assurer que tout le monde s'est exprimé avant de les révéler.",
    },
    {
      title: "Faites tourner",
      text: "Faites passer ce mobile ou cette tablette de mains en mains afin que chacun puisse s'exprimer. Chaque personne peut contrôler son vote avant de le valider.",
    },

    {
      title: "Résultats fiables",
      text: "Les résultats sont établis selon la méthode du jugement majoritaire. Ils vous permettent d'avoir une vision fidèle de l'opinion du groupe de personnes que vous avez consulté et d'obtenir un résultat conforme aux opinions exprimées.",
    },
  ],
  configurationUrne: {
    propositions: {
      titre: "Tout est OK ?",
      errorMessage: "Veuillez confirmer l'objet du vote.",
      input_1: {
        label: "Objet du vote",
        placeholder: "La destination des vacances",
      },
      input_2: {
        label: "Propositions",
        placeholder: "proposition...",
      },
      button: { 1: "confirmer", 2: "modifier" },
    },
    password: {
      pageTitle: "sécuriser les résultats",
      pageText:
        "Notez bien votre mot de passe. Ce sera le seul moyen d'accéder aux résultats une fois que tout le monde se sera exprimé.",
      label: { 1: "mot de passe", 2: "confirmation" },
      placeholder: { 1: "mot de passe", 2: "confirmation" },
    },
    voteIsReady: {
      title: "Votre urne mobile est prête !",
      text: "Les participants peuvent remplir leur bulletin sur cet appareil chacun leur tour.",
      button: "premier bulletin",
    },
  },
  Ballot: {
    Bulletin: {
      statement_part_1: "Ayant pris tous les éléments en compte concernant ",
      statement_part_2: ", je juge en conscience que ces propositions sont",
      btn_delete: "Supprimer ce bulletin",
      btn_confirm: "Mettre dans l'urne",
      btn_modify: "Modifier",
    },
    voteCasted: {
      info: {
        singular: "bulletin dans l'urne",
        plural: "bulletins dans l'urne",
      },
      title: "a voté !",
      text: "Votre Participation a bien été prise en compte. Vous pouvez maintenent passer cet appareil au prochain participant.",
      btn_continue: "bulletin suivant",
      btn_results: "résultats",
    },
  },
  results: {
    passwordCheck: {
      title: "accéder aux résultats",
      text: "Veuillez saisir le mot de passe de protection pour clore la phase de participation et accéder aux résultats.",
      label: "Mot de passe",
      btn_backToVote: "retour",
      error: {
        errorMessage: "Mot de passe erroné.",
        errorBtnText: "OK",
      },
    },
    finalResults: {
      title: "résultats",
    },
  },
  overlay: {
    textLooseData:
      "Toutes les données du vote vont être perdues. Voulez-vous définitivement clore et supprimer ce scrutin dans son ensemble ?",
    yes: "oui",
    no: "non",
  },
};
