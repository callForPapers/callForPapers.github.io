require 'jekyll-last-modified-at'
require 'liquid'

module Jekyll
  module MyFilters
    class Generator < Jekyll::Generator
      def generate(site)
        cfps = site.data['conferences'].map do |key,data|
          #path = "/_data/conferences/#{key}.json"
          #last_modified_at = Jekyll::LastModifiedAt::Determinator.new(site.source, path)
          #data['last_modified_at'] = last_modified_at.last_modified_at_time
          data
        end
        site.data['cfps'] = cfps #cfps.sort_by!{|x| x['last_modified_at']}
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::MyFilters)
