"use strict";
import { User } from "./modules/user.js";
export const getPersons = async () => {
  try {
    const res = await fetch(`https://randomuser.me/api/?results=20`);
    const data = await res.json();
    let present = "";
    getAllPersonne(data, present);
  } catch (e) {
    console.error(e.message);
  }
};

const getAllPersonne = (data, present) => {
  const allPersonne = data.results;
  allPersonne.forEach((e) => {
    addPersonne(e, present);
  });
};

const addPersonne = (personne, present) => {
  const options = {
    titre: personne.name.title,
    prenom: personne.name.first,
    prenom: personne.name.first,
    nom: personne.name.last,
    ville: personne.location.city,
    pays: personne.location.country,
    age: personne.dob.age,
    email: personne.email,
    photo: personne.picture.large,
    present: present,
  };
  new User(options).render();
};

getPersons();
