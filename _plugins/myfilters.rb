require 'jekyll-last-modified-at'

module Jekyll
  module MyFilters
    def file_date(input)
      File.mtime(input)
    end
    def next(input)
    	Jekyll::LastModifiedAt::Determinator.new(input, input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::MyFilters)