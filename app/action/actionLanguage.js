
function changeLanguage(language){
  console.log('change '+language);
  return {
       type:"CHANGE_LANGUAGE",
       language
  }
}

module.exports = {changeLanguage};
