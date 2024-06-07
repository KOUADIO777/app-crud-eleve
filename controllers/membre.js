const Membre = require('../models/membre');

exports.pageBravo=(req, res)=>{
    res.status(200).render('rdv/pageFelicitation');
}
exports.pageTableau=async (req,res)=>{
    const listeRDV=await Membre.find() 
    res.status(200).render('rdv/pageTableauRDV',{listeRDV});
}
exports.pageConsult=async (req,res)=>{
    const userRdv=await Membre.findById({_id: req.params.id})
    res.status(200).render('rdv/pageConsulter',{userRdv});
}
//PAGE EDITER
exports.pageEdit=async(req,res)=>{
    const userRdv=await Membre.findById({_id:req.params.id})
    res.status(200).render('rdv/pageEditer',{userRdv});

}
//PAGE AJOUTER

exports.pageAjoutRDV = (req, res)=>{
    res.status(200).render('rdv/rdv');
}

exports.addMembre = async (req, res, next)=>{
    const membre = new Membre({
        nom: req.body.nom,
        prenom: req.body.prenom,
        motif: req.body.motif,
        date: req.body.date,
        heure: req.body.heure,
        username: req.body.username,
    });
    

    try {
        const result = await membre.save()
        console.log('result', result);
        return res.status(201).render('rdv/pageFelicitation')
        
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'La création a échoué !' });
    }
};
//PAGE MODIFIER
exports.updateMembre = async (req, res, next) => {
    
    try {
        const membre = await Membre.findById({_id: req.params.id});
        if (!membre) {
            return res.status(404).json({ message: 'membre introuvable !' });
        }
        membre.nom= req.body.nom;
        membre.prenoms = req.body.prenoms;
        membre.motif = req.body.motif;
        membre.date = req.body.date;
        membre.heure = req.body.heure;
        membre.username = req.body.username;

        const result = await membre.save();
        console.log(result);
        res.status(200).render('rdv/updateRdv')

    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'La mise à jour a échoué !' });
    }

};
//PAGE SUPPRIMER

exports.deleteMembre = async (req, res, next) => {
   
    try {
        const membre = await Membre.findById({_id: req.params.id});
        if (!membre) {
            return res.status(404).json({ message: 'membre introuvable !' });
        }
        await Membre.findByIdAndDelete({_id: req.params.id});
        res.status(200).render("rdv/deleteRdv")

    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'L\'effacement a échoué !' });
    }
};

