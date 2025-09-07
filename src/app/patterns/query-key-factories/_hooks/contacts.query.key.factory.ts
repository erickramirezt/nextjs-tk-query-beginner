export const contactsQueryKeyFactory = {
  findContacts: () => ['contacts'],
  searchContacts: ({
    searchTerm,
    pageNumber,
    pageSize,
  }: {
    searchTerm: string
    pageNumber: number
    pageSize: number
  }) => [
    ...contactsQueryKeyFactory.findContacts(),
    { searchTerm },
    { pageNumber },
    { pageSize },
  ],
  findContact: ({ id }: { id: number }) => [
    ...contactsQueryKeyFactory.findContacts(),
    { id },
  ],
}
