# tdd-ruby-code

- Create a "Hero" Class
  - Accepts an array of abilities
  - Each ability will be represented by a hash with a name and "coolness" rating
- Create a method which returns the heros coolest ability
- Create a method which returns the heros ability names ordered alphabetically
- Create method add_ability, which accepts an ability and adds it to the array

`bundle add rspec`

`rspec --init`

`hero_class_spec.rb`

`describe`

`it`

`expect(<some executable code>).to be <some value>`

coolest_ability should return the ability hash

WRITE TESTS FIRST

"red, green, refactor"

add_ability should add an ability

add_ability should not accept anything which is not a hash with the keys of name and coolness
