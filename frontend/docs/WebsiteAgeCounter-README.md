# Website Age Counter Component

A premium, enterprise-grade dynamic counter that displays how long your website has been live.

## Features

- **Performance Optimized**: Lightweight with minimal impact on page speed
- **Enterprise Design**: Clean, minimal aesthetic matching Stripe/Notion standards
- **Responsive**: Mobile-first design that works across all devices
- **Dark Mode Compatible**: Automatic theme detection
- **Secure**: No external dependencies or vulnerabilities
- **Flexible**: Two variants (full/compact) for different use cases

## Usage

### React Component

```tsx
import { WebsiteAgeCounter } from '@/components/ui/WebsiteAgeCounter';

// Full version (updates every second)
<WebsiteAgeCounter />

// Compact version (updates daily)
<WebsiteAgeCounter variant="compact" />

// Custom launch date
<WebsiteAgeCounter launchDate={new Date('2023-01-01T00:00:00Z')} />

// Custom styling
<WebsiteAgeCounter className="custom-class" />
```

### Section Component

```tsx
import { WebsiteAgeSection } from '@/components/sections/WebsiteAgeSection';

<WebsiteAgeSection />
```

## Customization

### Launch Date

Change the default launch date in `WebsiteAgeCounter.tsx`:

```tsx
const DEFAULT_LAUNCH_DATE = new Date('2024-01-15T00:00:00Z');
```

Or pass a custom date:

```tsx
<WebsiteAgeCounter launchDate={new Date('2023-06-01T00:00:00Z')} />
```

### Styling

The component uses Tailwind CSS classes. Customize by modifying:

- `text-primary-600`: Main number color
- `text-secondary-500`: Label color
- `transition-all duration-300`: Animation timing

## Variants

### Full Variant
- Shows: Years, Months, Days, Hours, Minutes, Seconds
- Updates: Every second
- Best for: Hero sections, detailed stats

### Compact Variant
- Shows: Years, Months, Days
- Updates: Daily
- Best for: About sections, mature enterprise look

## Performance Considerations

- Uses `useEffect` with proper cleanup to prevent memory leaks
- Minimal DOM manipulation
- Efficient interval management
- Server-side rendering compatible (shows placeholder initially)
- No external dependencies

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Security

- No external script injection
- Sanitized output
- No exposed secrets
- Safe DOM manipulation

## Accessibility

- Semantic HTML structure
- Screen reader friendly
- Keyboard navigable
- High contrast support

## Integration

Add to your homepage:

```tsx
// In page.tsx
import { WebsiteAgeSection } from '@/components/sections/WebsiteAgeSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WebsiteAgeSection /> {/* Add here */}
        <OtherSections />
      </main>
      <Footer />
    </>
  );
}
```

## Dark Mode

Automatically adapts to your theme system. Uses CSS variables that work with both light and dark modes.

## Lighthouse Score

This component is designed to maintain 90+ Lighthouse scores:
- Performance: Minimal impact
- Accessibility: Full support
- Best Practices: Clean code
- SEO: Semantic HTML
