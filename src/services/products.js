export const getFruits = async () => {
  try {
    const response = await fetch('http://localhost:3000/fruits')
    const result = await response.json();

    return { data: result, error: null };
  } catch (error) {

    return { data: null, error} ;
  }
}

