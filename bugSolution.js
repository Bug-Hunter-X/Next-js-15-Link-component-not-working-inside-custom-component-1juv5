```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href);
  };

  return (
    <div>
      <a href="/" onClick={() => handleClick('/')}>Home</a>
      <a href="/about" onClick={() => handleClick('/about')}>About</a>
    </div>
  );
}

export default MyComponent;
```