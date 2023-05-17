import { selector } from 'recoil'
import img from '../../assets/profile.png'
import { getProfile } from '../../service/profile'
import { profileAtom } from '../atom/profile.atom'

export const profileSelector = selector({
    key: 'profile',
    get: async ({ get }) => {
      get(profileAtom);
      return {
        img: await img,
        txt: await getProfile(),
      };
    },
  });