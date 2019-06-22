
exports.up = function (knex, Promise) {
  return knex.schema.table('milestones', function (t) {
    t.integer('famous_people_id').unsigned();
    t.foreign('famous_people_id').references('famous_people.id');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table('milestones', function (t) {
    t.dropColumn('famous_people_id');
  });
};
