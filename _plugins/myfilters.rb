require 'jekyll-last-modified-at'

module Jekyll
  module MyFilters
    def file_date(input)
       last_commit_date = Jekyll::LastModifiedAt::Executor.sh(
            'git',
            'log',
            '-1',
            '--format="%ct"',
            '--',
            input
          )[/\d+/]
          # last_commit_date can be nil iff the file was not committed.
        (last_commit_date.nil? || last_commit_date.empty?) ? File::mtime(input) : last_commit_date
    end

    def next(input)
    	Jekyll::LastModifiedAt::Determinator.new(input, input)
    end
    class Generator < Jekyll::Generator

      def generate(site)
        %w(site.data.conferences).each do |type|
          site.send(type).each do |item|
            item.data['last_modified_at'] = Determinator.new(site.source, item.path)
          end
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::MyFilters)