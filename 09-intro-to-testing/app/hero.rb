class Hero

    attr_accessor :abilities

    # Accepts an array of abilities
    # Each ability will be represented by a hash with a name and "coolness" rating
    def initialize(abilities)
        self.abilities = abilities
    end

    # Returns the heros coolest ability
    def coolest_ability
        abilities.max_by do |ability|
            ability[:coolness]
        end
    end

    def ability_names
        abilities.map{|ability| ability[:name]}
    end

    # Returns abilities Ordered Alphabetically 
    def ordered_abilities
        ability_names.sort
    end

    def add_ability(new_ability)
        if (new_ability.class == Hash && new_ability.keys == [:name, :coolness])
            abilities << new_ability
        end
    end

end