import { database } from '../firebaseConfig';
import { ref, get } from 'firebase/database';

interface Location {
  latitude: number;
  longitude: number;
  name: string;
  type: string
}

export const getLocations = async (): Promise<Location[]> => {
  try {
    const locationsRef = ref(database, 'locations');
    const snapshot = await get(locationsRef);
    if (!snapshot.exists()) {
      console.log('No data available');
      return [];
    }

    const data = snapshot.val();
    const locations: Location[] = Object.keys(data).map(key => ({
      latitude: data[key].latitude,
      longitude: data[key].longitude,
      name: data[key].name,
      type: data[key].type,
    }));
    console.log('Locations array:', locations); // Debugging log
    return locations;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};
