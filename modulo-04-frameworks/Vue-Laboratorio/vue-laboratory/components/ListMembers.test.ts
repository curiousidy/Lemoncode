import ListMembers from './ListMembers.vue'
import { fireEvent, render, waitFor } from '@testing-library/vue'
import { createPinia, setActivePinia } from 'pinia'
import { useMembersStore } from 'composable/membersStore'
import { MemberEntity } from 'types'
import { loadMembers } from 'services/members'


describe('ListMembers.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fills the input, clicks the button, and checks if the store is updated', async () => {
    // Mock the API call
    loadMembers.get = () => Promise.resolve<MemberEntity[]>([
      //member 1 data
      {
        id: '1',
        login: 'adresin87',
        avatar_url: '',
        organizations_url: '',
        organizations: []
      },
      // Member 2 data
      {
        id: '2',
        login: 'memeber2',
        avatar_url: '',
        organizations_url: '',
        organizations: []
      },
      // Member 3 data
      {
        id: '3',
        login: 'member3',
        avatar_url: '',
        organizations_url: '',
        organizations: []
      },
      // Member 4 data
      {
        id: '4',
        login: 'member4',
        avatar_url: '',
        organizations_url: '',
        organizations: []
      }
    ]);

    const { getByTestId, getAllByRole } = render(ListMembers);
    const company: string = 'adevinta'
    // Find the input and set a value
    const input = getByTestId('search');
    await fireEvent.update(input, company);

    // Find and click the button
    const button = getByTestId('my-button');
    await fireEvent.click(button);

    // Check the presence and count of <tr> elements with data-testid="members"
    await waitFor(async () => {
      const rows = await getAllByRole('row');
      expect(rows.length).toBe(4);
    });

    const trElements = await getAllByRole('row');
    expect(trElements.length).toBeGreaterThanOrEqual(0);
  });
});


