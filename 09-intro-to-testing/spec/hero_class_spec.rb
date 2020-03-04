require_relative '../app/hero'

thor = Hero.new([ 
    {
        name: 'Super Strength',
        coolness: 3
    },
    {
        name:'Flight',
        coolness: 5
    },
    {
        name: 'Lightning Blast',
        coolness: 10
    }
])

describe "Hero class" do
    it "coolest_ability returns ability hash with highest cool number" do
        expect(thor.coolest_ability).to eq({
            name: 'Lightning Blast',
            coolness: 10
        })
    end

    it "ordered_abilities returns an array of alphabetically ordered ability names" do
        expect(thor.ordered_abilities).to eq(["Flight", "Lightning Blast", "Super Strength"])
    end
    
    it "add_ability should add an ability" do
        thor.add_ability({ name: 'cool thing', coolness: 9})
        expect(thor.abilities).to include({ name: 'cool thing', coolness: 9})
    end

    it "add_ability should not accept anything which is not a hash with the keys of name and coolness" do
        thor.add_ability("bla bla ")
        expect(thor.abilities).not_to include("bla bla ")
    end
end