class Mapper {
  toPersistence(domainContact) {
    return {
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId || null,
    };
  }

  toDomain(toPersistenceContact) {
    return {}
  }
}

const ContactMapper = new Mapper();

export default ContactMapper;
