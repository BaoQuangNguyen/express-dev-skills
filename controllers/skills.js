module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
}

const Skill = require('../models/skill');

function index(req, res) {
  const skills = Skill.getAll();
  res.render('skills/index', {skills})
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', {skill})
}

function newSkill(req, res) {
  res.render('skills/new', {title: 'New Skill'})
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}