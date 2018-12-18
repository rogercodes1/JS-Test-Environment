class WebCrawl

ALL = []
 attr_accessor :seed


  def initialize(seed_instagram_id)
    @seed_instagram_id = seed_instagram_id
    ALL << self
  end

  def self.all
    ALL
  end

  def crawl_instagram_graph(seed_instagram_id)
    get = "/account/#{seed_instagram_id}" //makes request

    return []  # TODO: Your Task

  end

end

class InstagramAccount

 attr_accessor :instagram_id, :username, :biography, :follower_count,:followers

ALL = []
  def initialize(instagram_id, username, biography, follower_count, followers)
    @instagram_id = instagram_id
    @username = username
    @biography = biography
    @follower_count = follower_count
    @followers = followers
    ALL << self
  end

  def self.all
    ALL
  end

end
