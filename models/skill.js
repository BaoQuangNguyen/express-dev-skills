module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
}

const skills = [
    {id: 238492, language: 'HTML', os: 'Mac OS Ventura', tools: 'Visual Studio Code'},
    {id: 243533, language: 'CSS', os: 'Mac OS Ventura', tools: 'Visual Studio Code'},
    {id: 253453, language: 'JavaScript', os: 'Mac OS Ventura', tools: 'Visual Studio Code'},
    
  ]
	
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(function(skill) {
      return skill.id === id;
    })
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.os = 'Mac OS Ventura';
    skill.tools = 'Visual Studio Code';
    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }