import { database } from '../firebaseConfig';
import { ref, get } from 'firebase/database';

interface Location {
  latitude: number;
  longitude: number;
  id: string;
  name: string;
  address: string;
  type: string;
  city: string;
  description: string;
  picture: string;
  url: string;
  english: string;
  reservation: string;
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
      address: data[key].address,
      id: data[key].id,
      type: data[key].type,
      city: data[key].city,
      description: data[key].description,
      picture: data[key].picture,
      url: data[key].url,
      english: data[key].english,
      reservation: data[key].reservation,
    }));
    console.log('Locations array:', locations); // Debugging log
    return locations;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};
