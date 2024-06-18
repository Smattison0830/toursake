import { database } from '../firebaseConfig';
import { ref, get } from 'firebase/database';

interface Location {
  latitude: number;
  longitude: number;
  name: string;
}

export const getLocations = async (): Promise<Location[]> => {
  try {
    const locationsRef = ref(database, 'locations');
    console.log(locationsRef)
    const snapshot = await get(locationsRef);
    console.log(snapshot)
    if (!snapshot.exists()) {
      console.log('No data available');
      return [];
    }

    const data = snapshot.val();
    const locations: Location[] = Object.keys(data).map(key => ({
      latitude: data[key].latitude,
      longitude: data[key].longitude,
      name: data[key].name,
    }));

    console.log('Locations array:', locations); // Debugging log
    return locations;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};
