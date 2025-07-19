---
enable: true # Control the visibility of this section across all pages where it is used
head_type: "heading"
# unique_id: "section-1" # If head_type is "filter", this will be used as the unique id for the filtering.
filter:
  layout: "classic" # "classic" | "boxed" | "modern"

head:
  title: "我们如何助力企业实现卓越增长"
  subtitle: "成功案例"

  cta_btn:
    enable: true
    label: "探索更多案例"
    url: "/case-studies"
    rel: ""
    target: ""

# Check src/types/index.d.ts `ContentList` type
body:
  content: "portfolio"
  layout: "masonry"
  # columns: 3
  # limit: false
  # gap: "gap-6"
  card:
    layout: "overlay" # "classic" | "overlay"
---
