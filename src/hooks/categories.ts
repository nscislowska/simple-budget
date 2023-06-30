import useSWR from 'swr';

export useCategories(){
    const {data, error} = useSWR('../api/categories.json')
  }