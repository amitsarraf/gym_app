export const ExerciseOptions = {
  method: 'GET',
  url: '',
  headers: {
    'X-RapidAPI-Key': '111bf24425msh6309e48356314ebp1751dbjsn8e8657604769',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
